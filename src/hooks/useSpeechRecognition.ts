import { useCallback, useRef, useState } from 'react'

type SpeechRecognitionAlternativeLike = {
  transcript: string
}

type SpeechRecognitionResultLike = {
  isFinal: boolean
  0: SpeechRecognitionAlternativeLike
}

type SpeechRecognitionResultListLike = {
  length: number
  [index: number]: SpeechRecognitionResultLike
}

type SpeechRecognitionEventLike = {
  resultIndex: number
  results: SpeechRecognitionResultListLike
}

type SpeechRecognitionErrorEventLike = {
  error: string
}

type SpeechRecognitionLike = {
  lang: string
  continuous: boolean
  interimResults: boolean
  maxAlternatives: number
  onend: (() => void) | null
  onerror: ((event: SpeechRecognitionErrorEventLike) => void) | null
  onresult: ((event: SpeechRecognitionEventLike) => void) | null
  abort: () => void
  start: () => void
  stop: () => void
}

type SpeechRecognitionConstructor = new () => SpeechRecognitionLike

type WindowWithSpeechRecognition = Window & {
  SpeechRecognition?: SpeechRecognitionConstructor
  webkitSpeechRecognition?: SpeechRecognitionConstructor
}

function getSpeechRecognitionConstructor() {
  if (typeof window === 'undefined') return undefined
  const speechWindow = window as WindowWithSpeechRecognition
  return speechWindow.SpeechRecognition ?? speechWindow.webkitSpeechRecognition
}

export function useSpeechRecognition() {
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null)
  const [isListening, setIsListening] = useState(false)
  const [error, setError] = useState('')
  const isSupported = Boolean(getSpeechRecognitionConstructor())

  const stop = useCallback(() => {
    recognitionRef.current?.stop()
    recognitionRef.current = null
    setIsListening(false)
  }, [])

  const start = useCallback(
    (onTranscript: (transcript: string, isFinal: boolean) => void) => {
      const Recognition = getSpeechRecognitionConstructor()

      if (!Recognition) {
        setError("La reconnaissance vocale n'est pas disponible sur ce navigateur.")
        return
      }

      recognitionRef.current?.abort()

      const recognition = new Recognition()
      recognition.lang = 'fr-FR'
      recognition.continuous = false
      recognition.interimResults = true
      recognition.maxAlternatives = 1
      recognition.onresult = (event) => {
        let finalTranscript = ''
        let interimTranscript = ''

        for (let i = event.resultIndex; i < event.results.length; i += 1) {
          const transcript = event.results[i][0].transcript
          if (event.results[i].isFinal) {
            finalTranscript += transcript
          } else {
            interimTranscript += transcript
          }
        }

        const transcript = (finalTranscript || interimTranscript).trim()
        if (transcript) onTranscript(transcript, Boolean(finalTranscript))
      }
      recognition.onerror = (event) => {
        const message =
          event.error === 'not-allowed'
            ? 'Micro refuse par le navigateur.'
            : 'Reconnaissance vocale interrompue.'
        setError(message)
        setIsListening(false)
      }
      recognition.onend = () => {
        setIsListening(false)
        recognitionRef.current = null
      }

      try {
        recognition.start()
        recognitionRef.current = recognition
        setError('')
        setIsListening(true)
      } catch {
        setError('Impossible de demarrer le micro.')
        setIsListening(false)
      }
    },
    [],
  )

  return {
    error,
    isListening,
    isSupported,
    start,
    stop,
  }
}
