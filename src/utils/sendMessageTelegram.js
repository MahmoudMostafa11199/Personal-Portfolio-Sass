import { useState } from 'react';
import Swal from 'sweetalert2';

const BOT_TOKEN = '7615560766:AAEgOh56feVloKs08M9eWsg0AAeiPkoPjXU';
const CHAT_ID = 1476437182;
const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

const SendMessageTelegram = function () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Format message telegram
    const text = `
        📩 *New Contact Form Submission* 📩
        👤 *Name:* ${formData.name}
        📧 *Email:* ${formData.email}
        💬 *Message:* ${formData.message}
      `;

    // Send message to Telegram
    try {
      const res = await fetch(TELEGRAM_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: 'Markdown',
        }),
      });

      if (!res.ok)
        throw new Error(`API request failed with status ${res.status}`);
      else
        Swal.fire(
          'Message Sent!',
          'Your message has been sent successfully.',
          'success'
        );
      setFormData({ name: '', email: '', message: '' });
      //
    } catch (err) {
      Swal.fire(
        'Error!',
        `Failed to send message. Please try again later.(${err.message})`,
        'error'
      );
    }
  };

  return { formData, handleChange, handleSubmit };
};

export default SendMessageTelegram;
