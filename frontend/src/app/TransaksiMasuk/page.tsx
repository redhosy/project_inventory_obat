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
            <div className="flex flex-col md:flex-row-reverse space-y-4 md:space-y-0 md:space-x-4">
                {/* Pop-up Input Card */}
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-900 bg-opacity-50">
                        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark w-1/3 p-6">
                            <h4 className="text-xl font-semibold text-black dark:text-white">Input Transaksi Masuk</h4>

                            {/* Form Input */}
                            <div className="space-y-4 mt-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">No Transaksi</label>
                                    <input
                                        type="text"
                                        placeholder="Enter no transaksi"
                                        className="mt-2 block w-full h-10 rounded-md border-gray-300 shadow-sm dark:bg-gray-800 dark:text-white"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Kode Obat</label>
                                    <input
                                        type="text"
                                        placeholder="Enter kode obat"
                                        className="mt-2 block w-full h-10 rounded-md border-gray-300 shadow-sm dark:bg-gray-800 dark:text-white"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Nama Obat</label>
                                    <input
                                        type="text"
                                        placeholder="Enter nama obat"
                                        className="mt-2 block w-full h-10 rounded-md border-gray-300 shadow-sm dark:bg-gray-800 dark:text-white"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Jenis Obat</label>
                                    <input
                                        type="text"
                                        placeholder="Enter jenis obat"
                                        className="mt-2 block w-full h-10 rounded-md border-gray-300 shadow-sm dark:bg-gray-800 dark:text-white"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Jumlah</label>
                                    <input
                                        type="number"
                                        placeholder="Enter jumlah"
                                        className="mt-2 block w-full h-10 rounded-md border-gray-300 shadow-sm dark:bg-gray-800 dark:text-white"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Harga per Unit</label>
                                    <input
                                        type="number"
                                        placeholder="Enter harga per unit"
                                        className="mt-2 block w-full h-10 rounded-md border-gray-300 shadow-sm dark:bg-gray-800 dark:text-white"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Supplier</label>
                                    <input
                                        type="text"
                                        placeholder="Enter supplier"
                                        className="mt-2 block w-full h-10 rounded-md border-gray-300 shadow-sm dark:bg-gray-800 dark:text-white"
                                    />
                                </div>

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
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="px-4 py-6 md:px-6 xl:px-7.5">
                        <h4 className="text-xl font-semibold text-black dark:text-white">Transaksi Masuk</h4>
                    </div>

                    {/* Tombol untuk membuka input form */}
                    <div className="mb-4 flex justify-end px-4">
                        <button
                            onClick={toggleModal}
                            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md text-sm"
                        >
                            <FaPlus className="mr-2" />
                        </button>
                    </div>

                    {/* Table Header */}
                    <div className="grid grid-cols-10 border-t border-stroke px-2 py-2 dark:border-strokedark bg-gray-100 dark:bg-gray-800 rounded-t-lg shadow-md">
                        {['No', 'NoTrans', 'KodeObat', 'NamaObat', 'Jumlah', 'HargaPerUnit', 'TotHarga', 'TglMasuk', 'Supplier', 'Action'].map((header, index) => (
                            <div key={index} className="flex items-center justify-center text-center font-medium p-2">
                                <p className="text-black dark:text-white">{header}</p>
                            </div>
                        ))}
                    </div>

                    {/* Table Rows */}
                    {transactionData.map((transaction, index) => (
                        <div
                            className="grid grid-cols-10 border-t border-stroke px-2 py-2 dark:border-strokedark bg-white dark:bg-gray-900"
                            key={index}
                        >
                            <div className="flex items-center justify-center text-center p-2"><p className="text-sm text-black dark:text-white">{index + 1}</p></div>
                            <div className="flex items-center justify-center text-center p-2"><p className="text-sm text-black dark:text-white">{transaction.noTransaksi}</p></div>
                            <div className="flex items-center justify-center text-center p-2"><p className="text-sm text-black dark:text-white">{transaction.kodeObat}</p></div>
                            <div className="flex items-center justify-center text-center p-2"><p className="text-sm text-black dark:text-white">{transaction.namaObat}</p></div>
                            <div className="flex items-center justify-center text-center p-2"><p className="text-sm text-black dark:text-white">{transaction.jumlah}</p></div>
                            <div className="flex items-center justify-center text-center p-2"><p className="text-sm text-black dark:text-white">Rp{transaction.hargaPerUnit}</p></div>
                            <div className="flex items-center justify-center text-center p-2"><p className="text-sm text-black dark:text-white">Rp{transaction.totalHarga}</p></div>
                            <div className="flex items-center justify-center text-center p-2"><p className="text-sm text-black dark:text-white">{transaction.tanggalMasuk}</p></div>
                            <div className="flex items-center justify-center text-center p-2"><p className="text-sm text-black dark:text-white">{transaction.supplier}</p></div>
                            <div className="flex items-center justify-center text-center p-2">
                                <button className="text-sm text-blue-500 hover:underline"><FaEdit className="mr-1" /></button>
                                <button className="ml-2 text-sm text-red-500 hover:underline"><FaTrash className="mr-1" /></button>
                            </div>
                        </div>
                    ))}     
            </div>
        </div>
        </DefaultLayout >
    );
}
