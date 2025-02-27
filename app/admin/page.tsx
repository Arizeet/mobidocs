import { DataTable } from '@/components/table/DataTable'
import StatCard from '@/components/StatCard'
import { columns } from '@/components/table/columns'
import { getRecentAppointmentList } from '@/lib/actions/appointment.actions'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AdminPage = async () => {
    const appointments = await getRecentAppointmentList()
    return (
        <div className='mx-auto flex max-w-5xl flex-col space-y-6'>
            <header className='admin-header'>
                <Link href='/' className='cursor-pointer'>
                    <Image
                        src="/assets/icons/logo-full.svg"
                        height={32}
                        width={168}
                        alt='logo'
                        className='h-8 w-fit'
                    />
                </Link>
                <p className='text-16-semibold'>Admin Dashboard</p>
            </header>
            <main className='admin-main'>
                <section className='w-full space-y-0'>
                    <h1 className="text-xl font-bold">Welcome👋</h1>
                    <p className='text-dark-700'>Start the day with managing new appointments</p>
                </section>
                <section className='admin-stat'>
                    <StatCard
                        type="appointments"
                        count={appointments.scheduledCount}
                        label="Schedule appointments"
                        icon="/assets/icons/appointments.svg"
                    />
                    <StatCard
                        type="pending"
                        count={appointments.pendingCount}
                        label="Pending appointments"
                        icon="/assets/icons/pending.svg"
                    />
                    <StatCard
                        type="cancelled"
                        count={appointments.cancelledCount}
                        label="Cancelled appointments"
                        icon="/assets/icons/cancelled.svg"
                    />
                </section>

                <DataTable columns={columns} data={appointments.documents} />
                {/* <DataTable columns={columns} data={data} /> */}
            </main>
        </div>
    )
}

export default AdminPage