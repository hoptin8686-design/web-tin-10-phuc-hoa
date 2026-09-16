import fs from 'fs';
import path from 'path';

const BASE_DIR = 'd:/Du-an-web/web-tin-10-phuc-hoa';

// We want to link all lessons from bai-01 to bai-34. 
// Note that some lessons in Tin 10 might not exist if it's 34 lessons. 
// Let's generate from bai-01 to bai-34.
const LESSONS = Array.from({ length: 34 }, (_, i) => `bai-${String(i+1).padStart(2, '0')}`);

function kebabToCamel(str) {
  return str.replace(/-([a-z0-9])/g, g => g[1].toUpperCase());
}

// 1. Update lib/theory.ts
const theoryImports = LESSONS.map(l => `import ${kebabToCamel(l)} from "@/data/theory/${l}";`).join('\n');
const theoryExports = LESSONS.map(l => `  "${l}": ${kebabToCamel(l)},`).join('\n');
const theoryContent = `import type { LessonTheory } from "./types";\n${theoryImports}\n\nexport const THEORY_BANK: Record<string, LessonTheory> = {\n${theoryExports}\n};\n\nexport function getTheory(lessonId: string): LessonTheory | null {\n  return THEORY_BANK[lessonId] ?? null;\n}\n\nexport function hasTheory(lessonId: string): boolean {\n  return lessonId in THEORY_BANK;\n}\n`;
fs.writeFileSync(path.join(BASE_DIR, 'lib/theory.ts'), theoryContent);

// 2. Update lib/questions.ts
const qImports = LESSONS.map(l => `import { questions as q_${kebabToCamel(l)} } from "@/data/questions/${l}";`).join('\n');
const qExports = LESSONS.map(l => `  "${l}": q_${kebabToCamel(l)},`).join('\n');
const qContent = `import type { Question } from "./types";\n${qImports}\n\nexport const QUESTION_BANK: Record<string, Question[]> = {\n${qExports}\n};\n\nexport function getQuestions(lessonId: string): Question[] {\n  return QUESTION_BANK[lessonId] || [];\n}\n`;
fs.writeFileSync(path.join(BASE_DIR, 'lib/questions.ts'), qContent);

// 3. Update lib/extras.ts
const eImports = LESSONS.map(l => `import { extra as e_${kebabToCamel(l)} } from "@/data/extra/${l}";`).join('\n');
const eExports = LESSONS.map(l => `  "${l}": e_${kebabToCamel(l)},`).join('\n');
const eContent = `import type { LessonExtra } from "./types";\n${eImports}\n\nexport const EXTRA_BANK: Record<string, LessonExtra> = {\n${eExports}\n};\n\nexport function getExtra(lessonId: string): LessonExtra | null {\n  return EXTRA_BANK[lessonId] ?? null;\n}\n`;
fs.writeFileSync(path.join(BASE_DIR, 'lib/extras.ts'), eContent);

console.log('✅ Done linking all Tin 10 lessons.');
