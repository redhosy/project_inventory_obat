'use client';

import { useState } from "react";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa"; // Import ikon plus, edit, dan delete

export default function IncomingTransaction() {
    const [isModalOpen, setIsModalOpen] = useState(false); // State untuk mengontrol modal visibility

    const transactionData = [
        {
            noTransaksi: "TRX001",
            kodeObat: "OBT001",
            namaObat: "Paracetamol",
            jenisObat: "Tablet",
            jumlah: 100,
            hargaPerUnit: 5000,
            totalHarga: 500000,
            tanggalMasuk: "2023-11-01",
            supplier: "Supplier A",
        },
        {
            noTransaksi: "TRX002",
            kodeObat: "OBT002",
            namaObat: "Ibuprofen",
            jenisObat: "Tablet",
            jumlah: 50,
            hargaPerUnit: 8000,
            totalHarga: 400000,
            tanggalMasuk: "2023-11-05",
            supplier: "Supplier B",
        },
    ];

    const toggleModal = () => setIsModalOpen(!isModalOpen); // Fungsi untuk toggle modal

    return (
        <DefaultLayout>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col md:flex-row-reverse space-y-4 md:space-y-0 md:space-x-4">
                {/* Pop-up Input Card */}
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-900 bg-opacity-50">
                        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark w-1/3 p-6">
                            <h4 className="text-xl font-semibold text-black dark:text-white">Input Transaksi Masuk</h4>

                            {/* Form Input */}
                            <div className="space-y-4 mt-6">
                                {['No Transaksi', 'Kode Obat', 'Nama Obat', 'Jenis Obat', 'Jumlah', 'Harga per Unit', 'Supplier'].map((label, index) => (
                                    <div key={index}>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">{label}</label>
                                        <input
                                            type={label === 'Jumlah' || label === 'Harga per Unit' ? "number" : "text"}
                                            placeholder={`Enter ${label.toLowerCase()}`}
                                            className="mt-2 block w-full h-10 rounded-md border-gray-300 shadow-sm dark:bg-gray-800 dark:text-white"
                                        />
                                    </div>
                                ))}
                                {/* Tombol untuk menutup modal */}
                                <div className="mt-4 flex justify-end space-x-2">
                                    <button
                                        onClick={toggleModal}
                                        className="px-4 py-2 bg-gray-300 text-black rounded-md"
                                    >
                                        Batal
                                    </button>
                                    <button
                                        className="px-4 py-2 bg-blue-500 text-white rounded-md"
                                    >
                                        Simpan
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Output card (tabel) */}
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark w-full">
                    <div className="px-4 py-6 md:px-6 xl:px-7.5">
                        <h4 className="text-xl font-semibold text-black dark:text-white">Transaksi Masuk</h4>
                    </div>

                    {/* Tombol untuk membuka input form */}
                    <div className="mb-4 flex justify-between items-center px-4">
                        <form className="max-w-md w-full flex">
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input
                                    type="search"
                                    id="default-search"
                                    className="block w-full pl-10 pr-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search..."
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="ml-2 px-4 py-2 bg-blue-700 text-white rounded-lg text-sm hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Search
                            </button>
                        </form>

                        <button
                            onClick={toggleModal}
                            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md text-sm ml-4"
                        >
                            <FaPlus className="mr-2" />
                            Add
                        </button>
                    </div>


                    {/* Table - Adjusted to your requested structure */}
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-separate border-spacing-0 border border-gray-300 dark:border-gray-700">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    {['No', 'NoTrans', 'KodeObat', 'NamaObat', 'Jumlah', 'HargaPerUnit', 'TotHarga', 'TglMasuk', 'Supplier', 'Action'].map((header, index) => (
                                        <th key={index} scope="col" className="px-6 py-3">{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {transactionData.map((transaction, index) => (
                                    <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <td className="px-6 py-4 text-sm text-black dark:text-white">{index + 1}</td>
                                        <td className="px-6 py-4 text-sm text-black dark:text-white">{transaction.noTransaksi}</td>
                                        <td className="px-6 py-4 text-sm text-black dark:text-white">{transaction.kodeObat}</td>
                                        <td className="px-6 py-4 text-sm text-black dark:text-white">{transaction.namaObat}</td>
                                        <td className="px-6 py-4 text-sm text-black dark:text-white">{transaction.jumlah}</td>
                                        <td className="px-6 py-4 text-sm text-black dark:text-white">Rp{transaction.hargaPerUnit}</td>
                                        <td className="px-6 py-4 text-sm text-black dark:text-white">Rp{transaction.totalHarga}</td>
                                        <td className="px-6 py-4 text-sm text-black dark:text-white">{transaction.tanggalMasuk}</td>
                                        <td className="px-6 py-4 text-sm text-black dark:text-white">{transaction.supplier}</td>
                                        <td className="px-6 py-4 text-sm">
                                            <div className="flex space-x-2">
                                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                                    <FaEdit className="mr-1" />
                                                </a>
                                                <a href="#" className="font-medium text-red-500 dark:text-red-400 hover:underline">
                                                    <FaTrash className="mr-1" />
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
