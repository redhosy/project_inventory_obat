'use client';
import { useState } from "react";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import { FaPlus, FaEdit, FaTrash, FaRedo } from "react-icons/fa";

export default function CategoryManagement() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Data kategori dummy
    const categoryData = [
        {
            kodeKategori: "KTG001",
            namaKategori: "Tablet",
            deskripsi: "Obat berbentuk tablet, biasanya dikonsumsi secara oral.",
        },
        {
            kodeKategori: "KTG002",
            namaKategori: "Sirup",
            deskripsi: "Obat cair dengan rasa manis, sering untuk anak-anak.",
        },
    ];

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <DefaultLayout>
            <div className="bg-gray-100 dark:bg-gray-900 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                {/* Pop-up Input Card */}
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-900 bg-opacity-50">
                        <div className="rounded-md border border-stroke bg-white shadow-lg dark:border-strokedark dark:bg-boxdark w-1/3 p-6 max-h-[90vh] overflow-y-auto">
                            <h4 className="text-xl font-semibold text-black dark:text-white">Tambah Kategori</h4>
                            <div className="space-y-4 mt-6">
                                {[{
                                    label: 'Kode Kategori', type: 'text', placeholder: 'Masukkan kode kategori'
                                }, {
                                    label: 'Nama Kategori', type: 'text', placeholder: 'Masukkan nama kategori'
                                }, {
                                    label: 'Deskripsi', type: 'text', placeholder: 'Masukkan deskripsi kategori'
                                }].map((field, index) => (
                                    <div key={index}>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">{field.label}</label>
                                        <input
                                            type={field.type}
                                            placeholder={field.placeholder}
                                            className="mt-2 block w-full h-10 rounded-md border-gray-300 shadow-sm dark:bg-gray-800 dark:text-white"
                                        />
                                    </div>
                                ))}
                                <div className="mt-4 flex justify-end space-x-2">
                                    <button
                                        onClick={toggleModal}
                                        className="px-4 py-2 bg-gray-300 text-black rounded-md"
                                    >
                                        Batal
                                    </button>
                                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                                        Simpan
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Output card (tabel) */}
                <div className="rounded-sm border border-stroke bg-white shadow-lg dark:border-strokedark dark:bg-boxdark w-full">
                    <div className="px-4 py-6">
                        <h4 className="text-xl font-semibold text-black dark:text-white">Management Kategori</h4>
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
                                className="ml-2 px-4 py-2 bg-blue-700 text-white rounded-lg text-sm hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Search
                            </button>
                        </form>
                        <div className="mb-4 flex justify-between items-center px-4">
                            <button
                                onClick={toggleModal}
                                className="flex items-center px-4 py-1 bg-blue-500 text-white rounded-md text-sm ml-4">
                                <FaPlus className="mr-2" />
                                Add
                            </button>
                            <button
                                // onClick={toggleModal}
                                className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md text-sm ml-3">
                                <FaRedo className="mr-2" />
                            </button>
                        </div>
                    </div>


                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-separate border-spacing-0 border border-gray-300 dark:border-gray-700">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    {['No', 'Kode Kategori', 'Nama Kategori', 'Deskripsi', 'Aksi'].map((header, index) => (
                                        <th key={index} className="px-6 py-3">{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {categoryData.map((category, index) => (
                                    <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <td className="px-6 py-4">{index + 1}</td>
                                        <td className="px-6 py-4">{category.kodeKategori}</td>
                                        <td className="px-6 py-4">{category.namaKategori}</td>
                                        <td className="px-6 py-4">{category.deskripsi}</td>
                                        <td className="px-6 py-4 flex space-x-2">
                                            <FaEdit className="text-blue-500 cursor-pointer" />
                                            <FaTrash className="text-red-500 cursor-pointer" />
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
