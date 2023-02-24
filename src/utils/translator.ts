import { translate as translateAPI } from '@vitalets/google-translate-api';

async function translate(originalText?: string) {
  if (!originalText) {
    throw new Error('An error ocurred when trying to translate the text');
  }
  const { text } = await translateAPI(originalText, { to: 'es' });
  return text;
}

export default {
  translate,
};
