'use client'

import { useTranslations } from 'next-intl';
import { Link } from '@/lib/navigation';
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function SignupScreen() {
  const t = useTranslations('auth.signup');

  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight">
          {t('title')}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <Label htmlFor="name">{t('name')}</Label>
            <Input id="name" type="text" required />
          </div>

          <div>
            <Label htmlFor="email">{t('email')}</Label>
            <Input id="email" type="email" required />
          </div>

          <div>
            <Label htmlFor="password">{t('password')}</Label>
            <Input id="password" type="password" required />
          </div>

          <div>
            <Label htmlFor="confirm-password">{t('confirm')}</Label>
            <Input id="confirm-password" type="password" required />
          </div>

          <div className="flex items-center">
            <Checkbox id="terms" required />
            <Label htmlFor="terms" className="ml-2">
              {t('terms')}
            </Label>
          </div>

          <Button type="submit" className="w-full">
            {t('submit')}
          </Button>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          <Link href="/login" className="text-blue-600">
            {t('login')}
          </Link>
        </p>
      </div>
    </div>
  );
}