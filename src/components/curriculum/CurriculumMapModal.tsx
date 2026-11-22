/**
 * @license
 * Copyright (c) 2026-2027 Ahmed Ramadan Fouad Ahmed Rabei — CYBG · سايبجي — All Rights Reserved.
 */

import React, { useState } from 'react';
import { X, Layers, Compass, ArrowLeft } from 'lucide-react';
import { sounds } from '../../utils/soundEffects';

interface CurriculumMapModalProps {
  onClose: () => void;
  onSelectWorld?: (worldId: number) => void;
}

export const CurriculumMapModal: React.FC<CurriculumMapModalProps> = ({ onClose, onSelectWorld }) => {
  const [activeUnit, setActiveUnit] = useState<number>(1);

  const unitsData = [
    {
      id: 1,
      officialTitle: 'الوحدة الأولى: تكنولوجيا المعلومات والمجتمع',
      gameWorldTitle: 'مدينة الذكاء الاصطناعي',
      badge: 'الحوسبة والذكاء الاصطناعي',
      pedagogicalConcept: 'بناء الفهم التاريخي لثورة المعلومات والأنماط الحديثة (الحوسبة الطرفية والكمية) وآلية عمل الذكاء الاصطناعي وأخلاقياته.',
      lessons: [
        { code: '1-1', title: 'تطور تكنولوجيا المعلومات والتحول الاجتماعي', keyPoints: ['من الحاسبات المركزية ENIAC إلى الحاسبات الشخصية والسحابية', 'التجارة الإلكترونية والمدفوعات الرقمية وقانون مور', 'الحوسبة الطرفية Edge والواقع الافتراضي والمعزز والحوسبة الكمية'] },
        { code: '1-2', title: 'كيف يعمل الذكاء الاصطناعي', keyPoints: ['التسلسل الهرمي: الذكاء الاصطناعي > تعلم الآلة > التعلم العميق > الذكاء التوليدي', 'الشبكات العصبية الاصطناعية ANN والطبقات المخفية وضبط الأوزان', 'الذكاء الاصطناعي التوليدي ومخاطر الهلوسة'] },
        { code: '1-3', title: 'الذكاء الاصطناعي في الحياة اليومية والصناعة', keyPoints: ['محركات التوصية والمساعدات الصوتية والترجمة الآلية', 'التشخيص الطبي بالأشعة والزراعة الذكية والصيانة التنبؤية', 'مشكلة الصندوق الأسود وحقوق النشر والخصوصية'] },
        { code: '1-4', title: 'القضايا الأخلاقية في الذكاء الاصطناعي', keyPoints: ['مصادر التحيز الخوارزمي والبيانات الناقصة', 'الذكاء الاصطناعي القابل للتفسير (XAI)', 'الفرق بين المسؤولية والمساءلة ومبادئ الأخلاقيات الأربعة'] },
      ],
      relationship: 'تمهد الأساس المعرفي لحماية البيانات والشبكات في الوحدة الثانية.',
    },
    {
      id: 2,
      officialTitle: 'الوحدة الثانية: الأمن السيبراني',
      gameWorldTitle: 'القلعة السيبرانية',
      badge: 'الحماية والتشفير',
      pedagogicalConcept: 'تطبيق التشفير والتوقيعات الرقمية والمصادقة متعددة العوامل وتصميم أمان الشبكات وإدارة الحوادث.',
      lessons: [
        { code: '2-1', title: 'تقنيات التشفير والمصادقة', keyPoints: ['بروتوكول HTTPS ومصافحة TLS والشهادات الرقمية', 'التشفير الهجين والتوقيع الرقمي وعدم الإنكار', 'المصادقة متعددة العوامل MFA (المعرفة، الامتلاك، القياسات الحيوية)'] },
        { code: '2-2', title: 'تصميم أمان الشبكات', keyPoints: ['جدران الحماية Firewall والشبكات الافتراضية الخاصة VPN', 'المنطقة منزوعة السلاح DMZ لعزل الخوادم العامة', 'الدفاع المتعمق (4 طبقات) ونموذج انعدام الثقة Zero Trust'] },
        { code: '2-3', title: 'الاستجابة للحوادث وإدارة المخاطر', keyPoints: ['الوقاية من تسريب البيانات والعبث وتعطيل الخدمة', 'المراحل الست للاستجابة للحوادث (من الإعداد إلى الدروس المستفادة)', 'مصفوفة تقييم المخاطر: مستوى الخطر = الأثر × الاحتمالية'] },
      ],
      relationship: 'تزود مطور تطبيقات الويب بمعايير الأمان الأساسية التي يجب تطبيقها في الوحدة الثالثة.',
    },
    {
      id: 3,
      officialTitle: 'الوحدة الثالثة: تطبيقات الويب',
      gameWorldTitle: 'عالم تطبيقات الويب',
      badge: 'هندسة الويب الكاملة',
      pedagogicalConcept: 'دراسة البنية الثلاثية لتطبيقات الويب وبروتوكولات HTTP/API وتبادل بيانات JSON وأساسيات الواجهة الأمامية.',
      lessons: [
        { code: '3-1', title: 'البنية العامة لتطبيقات الويب', keyPoints: ['البنية الثلاثية: الواجهة الأمامية (Frontend)، الخلفية (Backend)، قاعدة البيانات', 'دورة طلب العميل والخادم وفصل المهام'] },
        { code: '3-2', title: 'طرق الاتصال في تطبيقات الويب', keyPoints: ['أوامر GET و POST ورموز حالة HTTP (200، 404، 500)', 'واجهات برمجة التطبيقات API وصيغة تبادل البيانات JSON'] },
        { code: '3-3', title: 'أساسيات تقنيات الواجهة الأمامية', keyPoints: ['HTML (البنية)، CSS (التنسيق)، JavaScript (التفاعل)', 'وسوم HTML الدلالية والتصميم المتجاوب وأطر العمل React و Next.js'] },
      ],
      relationship: 'تربط البرمجة بالتركيز على المستخدم وتجربة الاستخدام في الوحدة الرابعة.',
    },
    {
      id: 4,
      officialTitle: 'الوحدة الرابعة: تصميم الويب والوسائط',
      gameWorldTitle: 'مملكة تجربة المستخدم',
      badge: 'تجربة المستخدم والتحسين المستمر',
      pedagogicalConcept: 'تصميم واجهات متمحورة حول المستخدم وتقييم المواقع وتطبيق دورة التحسين المستمر.',
      lessons: [
        { code: '4-1', title: 'أنواع وخصائص الوسائط', keyPoints: ['مقارنة الوسائط الجماعية التفاعلية وأحادية الاتجاه', 'اختيار الوسائط المناسبة للجمهور والهدف'] },
        { code: '4-2', title: 'تصميم المعلومات وتجربة المستخدم للمواقع', keyPoints: ['الشخصيات البحثية Personas والمخططات السلكية Wireframes', 'مبادئ التصميم CRAP (التباين، التكرار، المحاذاة، التقارب)', 'قابلية الاستخدام مقابل إمكانية الوصول (Accessibility)'] },
        { code: '4-3', title: 'طرق تقييم المواقع الإلكترونية', keyPoints: ['المؤشرات الكمية (عدد المشاهدات، معدل الارتداد، معدل التحويل)', 'التقييم الاستكشافي للخبراء واختبارات قابلية الاستخدام'] },
        { code: '4-4', title: 'عملية التحسين المستمر للمواقع', keyPoints: ['دورة PDCA (خطط، نفذ، افحص، تصرف)', 'التفكير التصميمي واختبارات A/B المحكمة'] },
      ],
      relationship: 'تغلق دورة الهندسة البرمجية المتكاملة بالقياس والتطوير المستمر.',
    },
  ];

  const current = unitsData.find((u) => u.id === activeUnit) || unitsData[0];

  return (
    <div dir="rtl" className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl p-5 md:p-7 shadow-2xl overflow-y-auto max-h-[92vh] flex flex-col gap-6 text-right">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 gap-3">
          <div className="flex items-center gap-3">
            <button onClick={() => { sounds.playClick(); onClose(); }} className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors">
              <X className="w-5 h-5" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-cyan-400 shrink-0" />
                <h2 className="text-lg md:text-xl font-bold font-cyber text-slate-100">خريطة المنهج الدراسي والهيكل الأكاديمي</h2>
              </div>
              <p className="text-xs text-slate-400">البرمجة والذكاء الاصطناعي — الجزء الأول (14 درساً · 100 سؤال)</p>
            </div>
          </div>
          <span className="hidden sm:inline px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 text-xs font-bold font-tech whitespace-nowrap">14 درساً · 100 سؤال</span>
        </div>

        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col gap-2">
          <h3 className="text-xs font-bold text-slate-300 flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>التدرج المعرفي عبر العوالم الأربعة:</span>
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs font-tech pt-1">
            {unitsData.map((u) => (
              <div key={u.id} className="flex-1 p-2.5 rounded-lg bg-slate-900 border border-cyan-500/30 text-cyan-300 text-center w-full">
                <strong className="block text-[11px] text-cyan-400">{u.id}. {u.badge}</strong>
                <span>{u.gameWorldTitle}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {unitsData.map((u) => (
            <button
              key={u.id}
              onClick={() => { sounds.playClick(); setActiveUnit(u.id); }}
              className={`px-3.5 py-2 rounded-xl border text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                activeUnit === u.id ? 'bg-slate-800 text-white border-cyan-400 shadow-md ring-1 ring-cyan-500/50' : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              <span>العالم {u.id}</span>
              <span className="hidden sm:inline">({u.badge})</span>
            </button>
          ))}
        </div>

        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div>
              <span className="text-xs text-cyan-400 font-bold">{current.officialTitle}</span>
              <h3 className="text-base md:text-lg font-bold text-slate-100 font-cyber mt-0.5">{current.gameWorldTitle}</h3>
            </div>
            {onSelectWorld && (
              <button
                onClick={() => { sounds.playClick(); onSelectWorld(current.id); onClose(); }}
                className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors self-start sm:self-auto whitespace-nowrap"
              >
                <span>دخول العالم</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-3 rounded-xl border border-slate-800">
            <strong className="text-cyan-400 block mb-1">الهدف التعليمي للوحدة:</strong>
            {current.pedagogicalConcept}
          </div>

          <div className="flex flex-col gap-3">
            <strong className="text-xs text-slate-300">الدروس ومحاور التقييم:</strong>
            <div className="grid grid-cols-1 gap-2.5">
              {current.lessons.map((l) => (
                <div key={l.code} className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 flex flex-col gap-1.5 text-xs">
                  <div className="flex items-center gap-2 font-bold text-slate-200">
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-cyan-400 font-mono text-[11px] shrink-0">الدرس {l.code}</span>
                    <span>{l.title}</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-400 space-y-1 pr-2 text-[11px]">
                    {l.keyPoints.map((kp, idx) => <li key={idx} className="leading-relaxed">{kp}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800 text-[11px] text-slate-400">
            <span className="font-bold text-amber-400">الترابط بين الوحدات: </span>
            <span>{current.relationship}</span>
          </div>
        </div>

        <div className="flex justify-end pt-2 border-t border-slate-800">
          <button onClick={() => { sounds.playClick(); onClose(); }} className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors">إغلاق الخريطة</button>
        </div>
      </div>
    </div>
  );
};
