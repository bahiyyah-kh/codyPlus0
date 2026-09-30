import { useState } from 'react'
import { Eye, EyeOff, Rocket } from 'lucide-react'
import codyLogo from '../assets/Codypluslogo.png'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const inputClassName = 'h-12 w-full rounded-full border border-gray-200 bg-white px-4 text-sm text-slate-800 outline-none placeholder:text-gray-400 focus:border-blue-700 focus:ring-2 focus:ring-blue-100'
  const toggleClassName = 'absolute inset-y-0 left-1 flex w-11 items-center justify-center rounded-full text-slate-500 hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700'

  return (
    <div dir="rtl" lang="ar" className="min-h-svh bg-[linear-gradient(120deg,#fafbfc_0%,#f8fbfc_45%,#edf9fc_100%)] font-sans text-[#08085a]">
      <header dir="ltr" className="flex h-16 items-center justify-end border-b border-gray-100 bg-white px-5 sm:px-8">
        <img src={codyLogo} alt="Cody+" className="h-9 w-auto object-contain" />
      </header>

      <main className="mx-auto flex w-full max-w-md flex-col items-center px-4 py-8 sm:py-10">
        <div className="flex size-14 items-center justify-center rounded-2xl bg-[#08458e] text-white">
          <Rocket size={29} strokeWidth={1.8} aria-hidden="true" />
        </div>
        <h1 className="mt-4 text-center text-2xl font-black">ابدأ رحلتك التعليمية</h1>
        <p className="mt-2 text-center text-sm text-gray-400">أنشئ حسابك الآن</p>

        <div className="mt-8 w-full rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_2px_12px_rgba(15,23,42,0.06)] sm:p-6">
          <form noValidate onSubmit={(event) => event.preventDefault()} className="space-y-4 text-right">
            <div>
              <label htmlFor="full-name" className="mb-2 block text-sm font-medium">الاسم الكامل</label>
              <input id="full-name" name="name" type="text" autoComplete="name" placeholder="أدخل اسمك الكامل" className={inputClassName} />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">البريد الإلكتروني</label>
              <input id="email" name="email" type="email" dir="ltr" autoComplete="email" placeholder="example@email.com" className={inputClassName} />
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium">كلمة المرور</label>
              <div className="relative">
                <input id="password" name="password" type={showPassword ? 'text' : 'password'} autoComplete="new-password" placeholder="أدخل كلمة المرور" className={`${inputClassName} pl-14`} />
                <button type="button" aria-label={showPassword ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور'} aria-controls="password" onClick={() => setShowPassword((visible) => !visible)} className={toggleClassName}>
                  {showPassword ? <EyeOff size={19} aria-hidden="true" /> : <Eye size={19} aria-hidden="true" />}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirm-password" className="mb-2 block text-sm font-medium">تأكيد كلمة المرور</label>
              <div className="relative">
                <input id="confirm-password" name="confirmPassword" type={showConfirmPassword ? 'text' : 'password'} autoComplete="new-password" placeholder="أعد إدخال كلمة المرور" className={`${inputClassName} pl-14`} />
                <button type="button" aria-label={showConfirmPassword ? 'إخفاء تأكيد كلمة المرور' : 'إظهار تأكيد كلمة المرور'} aria-controls="confirm-password" onClick={() => setShowConfirmPassword((visible) => !visible)} className={toggleClassName}>
                  {showConfirmPassword ? <EyeOff size={19} aria-hidden="true" /> : <Eye size={19} aria-hidden="true" />}
                </button>
              </div>
            </div>

            <button type="submit" className="min-h-12 w-full rounded-full bg-[#08458e] px-4 py-3 text-base font-medium text-white hover:bg-[#063975] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700">إنشاء الحساب</button>
          </form>

          <p className="mt-5 text-center text-sm text-gray-400">
            لديك حساب بالفعل؟{' '}
            <span className="text-[#08458e]">تسجيل الدخول</span>
          </p>
        </div>
      </main>
    </div>
  )
}
