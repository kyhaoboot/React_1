import React from 'react'

export default function Techdetail() {
    // console.log(props.product);
  return (
    <div className='grid grid-cols-2'>
        <div>
            <img src="./img/applephone.jpg" />
        </div>
        <div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                    <th scope="col" className="px-6 py-3">
                        maSP
                    </th>
                    <th scope="col" className="px-6 py-3">
                        tenSP
                    </th>
                    <th scope="col" className="px-6 py-3">
                        manHinh
                    </th>
                    <th scope="col" className="px-6 py-3">
                        heDieuHanh
                    </th>
                    <th scope="col" className="px-6 py-3">
                        cameraTruoc
                    </th>
                    <th scope="col" className="px-6 py-3">
                        cameraSau
                    </th>
                    <th scope="col" className="px-6 py-3">
                        ram
                    </th>
                    <th scope="col" className="px-6 py-3">
                        rom
                    </th>
                    <th scope="col" className="px-6 py-3">
                        giaBan
                    </th>
                    <th scope="col" className="px-6 py-3">
                        hinhAnh
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        1
                    </th>
                    <td className="px-6 py-4">
                        VinSmart Live
                    </td>
                    <td className="px-6 py-4">
                        AMOLED, 6.2, Full HD+
                    </td>
                    <td className="px-6 py-4">
                        Android 9.0 (Pie)
                    </td>
                    <td className="px-6 py-4">
                        20 MP
                    </td>
                    <td className="px-6 py-4">
                        Chính 48 MP &amp; Phụ 8 MP, 5 MP
                    </td>
                    <td className="px-6 py-4">
                        "4 GB"
                    </td>
                    <td className="px-6 py-4">
                        64 GB
                    </td>
                    <td className="px-6 py-4">
                        5700000
                    </td>
                    <td className="px-6 py-4">
                        <img src="./img/vsphone.jpg"  />
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>

    </div>
  )
}
