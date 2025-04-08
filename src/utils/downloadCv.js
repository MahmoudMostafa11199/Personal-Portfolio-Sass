export const downloadCv = () => {
  const link = document.createElement('a');
  link.href =
    'https://drive.google.com/file/d/17NXr2n8unTKQDn2z24iPlRywNAjOhEmp/view?usp=sharing';
  link.target = '_blank';
  link.download =
    'https://drive.google.com/file/d/17NXr2n8unTKQDn2z24iPlRywNAjOhEmp/view?usp=sharing';
  link.click();
};
