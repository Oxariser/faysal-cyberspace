export const generateCV = () => {
  const link = document.createElement('a');
  link.href = '/Fahim_Faysal_CV.pdf';
  link.download = 'Fahim_Faysal_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
