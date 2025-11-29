#!/usr/bin/env node

/**
 * Claude Code PermissionRequest Hook -> Telegram Notification
 *
 * 권한 요청 시 Telegram으로 알림을 전송합니다.
 */

const https = require('https');

let inputData = '';

process.stdin.on('data', (chunk) => {
  inputData += chunk;
});

process.stdin.on('end', () => {
  try {
    const hookData = JSON.parse(inputData);
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error('TELEGRAM_BOT_TOKEN 또는 TELEGRAM_CHAT_ID 환경 변수가 설정되지 않았습니다.');
      process.exit(0);
    }

    const message = `🔔 *Claude Code 권한 요청*

*도구:* \`${hookData.tool || 'Unknown'}\`
*시간:* ${new Date().toLocaleString('ko-KR')}`;

    sendToTelegram(botToken, chatId, message);

  } catch (error) {
    console.error('Hook 실행 중 오류:', error.message);
    process.exit(0);
  }
});

/**
 * Telegram Bot API로 메시지 전송
 */
function sendToTelegram(botToken, chatId, message) {
  const postData = JSON.stringify({
    chat_id: chatId,
    text: message,
    parse_mode: 'Markdown'
  });

  const options = {
    hostname: 'api.telegram.org',
    port: 443,
    path: `/bot${botToken}/sendMessage`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  };

  const req = https.request(options, (res) => {
    if (res.statusCode === 200) {
      console.log('Telegram 알림 전송 성공');
    } else {
      console.error(`Telegram 알림 전송 실패: ${res.statusCode}`);
    }
  });

  req.on('error', (error) => {
    console.error('Telegram 요청 오류:', error.message);
  });

  req.write(postData);
  req.end();
}
