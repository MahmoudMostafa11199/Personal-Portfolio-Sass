export const downloadCv = () => {
  const link = document.createElement('a');
  link.href = '/CV_Mahmoud_Mostafa.pdf';
  link.download = 'CV_Mahmoud_Mostafa.pdf';
  link.click();
};
