import Link from "next/link"
import { RegisterForm } from "@/components/register-form"

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black">
      <div className="container flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold">Artwork</span>
            </Link>
            <h1 className="text-3xl font-bold">Create an account</h1>
            <p className="text-muted-foreground mt-2">Sign up to share your artwork with the world</p>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
            <RegisterForm />

            <div className="mt-6 text-center text-sm">
              <p className="text-muted-foreground">
                Already have an account?{" "}
                <Link href="/auth/login" className="font-medium underline underline-offset-4">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

