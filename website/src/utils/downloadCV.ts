import { soundFx } from './sound';

export const downloadCV = () => {
  try {
    soundFx.playClick();
  } catch (err) {
    // ignore sound if audio context not permitted
  }
  const link = document.createElement('a');
  link.href = '/Bhumit_Kotadiya_CV.pdf';
  link.download = 'Bhumit_Kotadiya_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
