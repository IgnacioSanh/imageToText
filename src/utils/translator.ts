import { translate as translateAPI } from '@vitalets/google-translate-api';

async function translate(originalText: string) {
  const { text } = await translateAPI(originalText, { to: 'es' });
  return text;
}

export default {
  translate,
};
