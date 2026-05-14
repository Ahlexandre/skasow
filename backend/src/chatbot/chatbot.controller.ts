import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ChatbotService } from './chatbot.service';
import { ChatbotMessageDto } from './dto/chatbot-message.dto';

@ApiTags('chatbot')
@Controller('chatbot')
export class ChatbotController {
  constructor(private readonly chatbotService: ChatbotService) {}

  @Post('message')
  sendMessage(@Body() dto: ChatbotMessageDto) {
    return this.chatbotService.reply(dto);
  }

  @Get('suggestions')
  getSuggestions() {
    return this.chatbotService.getSuggestions();
  }
}
