import { Link } from 'react-router-dom'
import { cn } from '../utils/cn'

type PrivacyPolicyLinkProps = {
  className?: string
}

export default function PrivacyPolicyLink({ className }: PrivacyPolicyLinkProps) {
  return (
    <Link to="/privacy" className={cn('font-medium text-[#C9A84C] underline-offset-2 hover:underline', className)}>
      politique de confidentialite
    </Link>
  )
}
