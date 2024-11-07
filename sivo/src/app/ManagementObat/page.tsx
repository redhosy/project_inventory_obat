import DefaultLayout from "../../components/Layouts/DefaultLayout";
import { FaEdit, FaTrash } from 'react-icons/fa';
import Image from "next/image";

export default function MedicineManagement() {
  const medicineData = [
    {
      kodeObat: "OBT001",
      image: "/images/product/product-01.png",
      namaObat: "Paracetamol",
      jenisObat: "Tablet",
      hargaObat: 5000,
      satuan: "Strip",
      tanggalExpired: "2025-12-01",
    },
    {
      kodeObat: "OBT002",
      image: "/images/product/product-02.png",
      namaObat: "Ibuprofen",
      jenisObat: "Tablet",
      hargaObat: 8000,
      satuan: "Box",
      tanggalExpired: "2024-08-15",
    },
    {
      kodeObat: "OBT003",
      image: "/images/product/product-03.png",
      namaObat: "Vitamin C",
      jenisObat: "Kapsul",
      hargaObat: 15000,
      satuan: "Botol",
      tanggalExpired: "2026-03-10",
    },
    {
      kodeObat: "OBT004",
      image: "/images/product/product-04.png",
      namaObat: "Amoxicillin",
      jenisObat: "Syrup",
      hargaObat: 12000,
      satuan: "Botol",
      tanggalExpired: "2024-10-05",
    },
  ];

  return (
    <DefaultLayout>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        {/* Output Card */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark md:w-2/3">
          <div className="px-4 py-6 md:px-6 xl:px-7.5">
            <h4 className="text-xl font-semibold text-black dark:text-white">Management Obat</h4>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-8 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-10 md:px-6 2xl:px-7.5">
            <div className="col-span-1 flex items-center"><p className="font-medium">No</p></div>
            <div className="col-span-1 flex items-center"><p className="font-medium">Kode Obat</p></div>
            <div className="col-span-2 flex items-center"><p className="font-medium">Nama Obat</p></div>
            <div className="col-span-1 flex items-center"><p className="font-medium">Jenis Obat</p></div>
            <div className="col-span-1 flex items-center"><p className="font-medium">Harga Obat</p></div>
            <div className="col-span-1 flex items-center"><p className="font-medium">Satuan</p></div>
            <div className="col-span-2 flex items-center"><p className="font-medium">Tanggal Expired</p></div>
            <div className="col-span-1 flex items-center"><p className="font-medium">Action</p></div>
          </div>

          {/* Table Rows */}
          {medicineData.map((medicine, index) => (
            <div
              className="grid grid-cols-8 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-10 md:px-6 2xl:px-7.5"
              key={index}
            >
              <div className="col-span-1 flex items-center"><p className="text-sm text-black dark:text-white">{index + 1}</p></div>
              <div className="col-span-1 flex items-center"><p className="text-sm text-black dark:text-white">{medicine.kodeObat}</p></div>
              <div className="col-span-2 flex items-center">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  {/* <div className="h-12.5 w-15 rounded-md">
                    <Image src={medicine.image} width={60} height={50} alt="Medicine Image" />
                  </div> */}
                  <p className="text-sm text-black dark:text-white">{medicine.namaObat}</p>
                </div>
              </div>
              <div className="col-span-1 flex items-center"><p className="text-sm text-black dark:text-white">{medicine.jenisObat}</p></div>
              <div className="col-span-1 flex items-center"><p className="text-sm text-black dark:text-white">Rp{medicine.hargaObat}</p></div>
              <div className="col-span-1 flex items-center"><p className="text-sm text-black dark:text-white">{medicine.satuan}</p></div>
              <div className="col-span-2 flex items-center"><p className="text-sm text-black dark:text-white">{medicine.tanggalExpired}</p></div>
              <div className="col-span-1 flex items-center">
                <button className="text-sm text-blue-500 hover:underline"><FaEdit className="mr-1" /></button>
                <button className="ml-2 text-sm text-red-500 hover:underline"><FaTrash className="mr-1" /></button>
              </div>
            </div>
          ))}
        </div>

        {/* Input Card */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark md:w-1/3">
          <div className="px-4 py-6 md:px-6 xl:px-7.5">
            <h4 className="text-xl font-semibold text-black dark:text-white">Input Obat</h4>
          </div>
          <div className="px-4 py-4 md:px-6 xl:px-7.5 space-y-4">
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
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Harga Obat</label>
              <input
                type="text"
                placeholder="Enter harga obat"
                className="mt-2 block w-full h-10 rounded-md border-gray-300 shadow-sm dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Satuan</label>
              <input
                type="text"
                placeholder="Enter satuan"
                className="mt-2 block w-full h-10 rounded-md border-gray-300 shadow-sm dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Tanggal Expired</label>
              <input
                type="date"
                placeholder="Select expired date"
                className="mt-2 block w-full h-10 rounded-md border-gray-300 shadow-sm dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div className="flex justify-end">
              <button className="rounded-md bg-blue-500 px-4 py-2 text-white shadow-md hover:bg-blue-600">Save</button>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
