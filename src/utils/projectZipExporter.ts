/**
 * @license
 * Copyright (c) 2026-2027 Ahmed Ramadan Fouad Ahmed Rabei — CYBG · سايبجي — All Rights Reserved.
 */

import JSZip from 'jszip';

const sourceFiles = import.meta.glob(
  [
    '/src/**/*.{ts,tsx,css}',
    '/index.html',
    '/package.json',
    '/tsconfig.json',
    '/vite.config.ts',
    '/metadata.json',
    '/LICENSE',
    '/COPYRIGHT.md',
    '/public/**/*.{json,svg}',
  ],
  { query: '?raw', import: 'default', eager: true }
);

export async function generateProjectZip(onProgress?: (percent: number, currentFile: string) => void): Promise<Blob> {
  const zip = new JSZip();
  const fileEntries = Object.entries(sourceFiles);
  const total = fileEntries.length;

  fileEntries.forEach(([filePath, content], index) => {
    const cleanPath = filePath.startsWith('/') ? filePath.slice(1) : filePath;
    zip.file(cleanPath, content as string);
    if (onProgress) {
      const pct = Math.round(((index + 1) / total) * 85);
      onProgress(pct, cleanPath);
    }
  });

  const readmeContent = `# CYBG · سايبجي — مغامرة البرمجة والذكاء الاصطناعي
جميع الحقوق محفوظة © 2026-2027 Ahmed Ramadan Fouad Ahmed Rabei

## التشغيل المحلي
1. npm install
2. npm run dev
3. افتح http://localhost:3000
`;

  zip.file('README.md', readmeContent);
  if (onProgress) onProgress(95, 'جاري ضغط ملفات المشروع...');

  const blob = await zip.generateAsync({
    type: 'blob',
    compression: 'DEFLATE',
    compressionOptions: { level: 6 },
  });

  if (onProgress) onProgress(100, 'الأرشيف جاهز للتحميل!');
  return blob;
}

export async function downloadProjectZip(onProgress?: (percent: number, currentFile: string) => void): Promise<number> {
  const fileCount = Object.keys(sourceFiles).length + 1;
  const blob = await generateProjectZip(onProgress);
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'cybg-ar-source-code.zip';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 5000);
  return fileCount;
}
