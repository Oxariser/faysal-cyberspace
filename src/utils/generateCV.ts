import jsPDF from 'jspdf';

export const generateCV = () => {
  const doc = new jsPDF();
  
  // Set font
  doc.setFont('helvetica');
  
  // Header - Name and Title
  doc.setFontSize(24);
  doc.setTextColor(51, 51, 153); // Primary color
  doc.text('Md. Fahim Faysal', 20, 25);
  
  doc.setFontSize(14);
  doc.setTextColor(100, 100, 100);
  doc.text('Cybersecurity Enthusiast | Aspiring Consultant & Bug Hunter', 20, 35);
  
  // Contact Information
  doc.setFontSize(10);
  doc.setTextColor(60, 60, 60);
  doc.text('Email: fahimfaysal127@gmail.com', 20, 45);
  doc.text('LinkedIn: linkedin.com/in/oxariser', 20, 50);
  doc.text('GitHub: github.com/Oxariser', 20, 55);
  doc.text('Facebook: facebook.com/0xAriser', 20, 60);
  
  // Professional Summary
  doc.setFontSize(16);
  doc.setTextColor(51, 51, 153);
  doc.text('Professional Summary', 20, 75);
  
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  const summary = 'Dedicated cybersecurity student with a passion for ethical hacking and digital security.\nCurrently pursuing intermediate education with plans for computer science specialization.\nActively learning through practical platforms like TryHackMe and Hack The Box.\nCompleted cybersecurity internship with professional certification.';
  const summaryLines = doc.splitTextToSize(summary, 170);
  doc.text(summaryLines, 20, 85);
  
  // Education
  doc.setFontSize(16);
  doc.setTextColor(51, 51, 153);
  doc.text('Education', 20, 115);
  
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text('Intermediate (Class 11) - Currently Pursuing', 20, 125);
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text('Planning higher studies in Computer Science with Cybersecurity Major', 20, 132);
  
  // Experience & Certifications
  doc.setFontSize(16);
  doc.setTextColor(51, 51, 153);
  doc.text('Experience & Certifications', 20, 150);
  
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text('Cybersecurity Intern', 20, 160);
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text('2-month internship with CSCI Certification', 20, 167);
  
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text('Ambassador - Secure Byte', 20, 177);
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text('Community leadership and cybersecurity advocacy', 20, 184);
  
  // Skills
  doc.setFontSize(16);
  doc.setTextColor(51, 51, 153);
  doc.text('Technical Skills', 20, 200);
  
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text('• Programming: Python, HTML, CSS', 20, 210);
  doc.text('• Security Tools: Wireshark, Burp Suite', 20, 217);
  doc.text('• Specializations: Web Penetration Testing, Network Security', 20, 224);
  doc.text('• Learning Platforms: TryHackMe, Hack The Box', 20, 231);
  doc.text('• Additional: Prompt Engineering, Ethical Hacking', 20, 238);
  
  // Projects
  doc.setFontSize(16);
  doc.setTextColor(51, 51, 153);
  doc.text('Projects', 20, 255);
  
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text('Professional Portfolio Website', 20, 265);
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text('Modern portfolio showcasing cybersecurity expertise and professional branding', 20, 272);
  
  // Footer
  doc.setFontSize(8);
  doc.setTextColor(150, 150, 150);
  doc.text('Generated: ' + new Date().toLocaleDateString(), 20, 290);
  
  // Save the PDF
  doc.save('Fahim_Faysal_CV.pdf');
};