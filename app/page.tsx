import AlertLogin from "@/components/AlertLogin";
import PatientForm from "@/components/forms/PatientForm"
import PasskeyModal from "@/components/PasskeyModal";
import Image from "next/image"
import Link from "next/link"

export default function Home({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams.admin === 'true';
  const hasRegistered = searchParams.hasRegistered === 'true';
  const existingUserId = searchParams.existingUserId
  const userId = Array.isArray(existingUserId) ? existingUserId[0] : existingUserId;
  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}
      {hasRegistered && <AlertLogin existingUserId={userId} />}

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            height={500}
            width={500}
            alt="patient"
            className="mb-2 h-8 w-fit"
          />
          <PatientForm />
          <div className="text-14-regular mt-10 flex justify-between">
            <p className="justify-items-end text-dark-600 lg:text-left">
              © Copyright MobiDocs
            </p>
            <Link href="/?admin=true" className="text-green-500 underline">Admin</Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding-img.png"
        width={1000}
        height={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  )
}
