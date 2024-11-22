'use client';
import { useState } from "react";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import { FaPlus, FaEdit, FaTrash, FaRedo } from "react-icons/fa";
import { Button, Modal, Table, TextInput, Label } from "flowbite-react";

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

    const toggleModal = () => {
        console.log("Toggling modal", !isModalOpen);
        setIsModalOpen(!isModalOpen);
      };
      

    return (
        <DefaultLayout>
            <div className="bg-gray-100 dark:bg-gray-900 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                {/* Pop-up Input Card */}
                <Modal show={isModalOpen} size="md" popup onClose={toggleModal}>
                    <Modal.Header />
                    <Modal.Body>
                        <div className="space-y-6">
                            <h4 className="text-xl font-semibold text-black dark:text-white">Tambah Kategori</h4>
                            <form className="space-y-4">
                                {[
                                    { label: "Kode Kategori", placeholder: "Masukkan kode kategori" },
                                    { label: "Nama Kategori", placeholder: "Masukkan nama kategori" },
                                    { label: "Deskripsi", placeholder: "Masukkan deskripsi kategori" },
                                ].map((field, index) => (
                                    <div key={index}>
                                        <Label value={field.label} className="text-gray-700 dark:text-gray-200" />
                                        <TextInput placeholder={field.placeholder} required />
                                    </div>
                                ))}
                                <div className="flex justify-end space-x-2">
                                    <Button color="gray" onClick={toggleModal}>
                                        Batal
                                    </Button>
                                    <Button color="info">Simpan</Button>
                                </div>
                            </form>
                        </div>
                    </Modal.Body>
                </Modal>

                {/* Output card (tabel) */}
                <div className="rounded-sm border border-stroke bg-white shadow-lg dark:border-strokedark dark:bg-boxdark w-full">
                    <div className="px-4 py-6">
                        <h4 className="text-xl font-semibold text-black dark:text-white">Management Kategori</h4>
                    </div>

                    {/* Tombol untuk membuka input form */}
                    <div className="mb-4 flex justify-between items-center px-4">
                        <form className="max-w-md w-full flex">
                            <TextInput
                                placeholder="Search..."
                                required
                                className="w-full"
                                addon={<FaRedo />}
                            />
                            <Button type="submit" className="ml-2">
                                Search
                            </Button>
                        </form>
                        <div className="flex space-x-2">
                            <Button color="info" onClick={toggleModal} className="flex items-center space-x-2">
                                <FaPlus />
                                <span>Add</span>
                            </Button>
                            <Button color="gray" className="flex items-center space-x-2">
                                <FaRedo />
                            </Button>
                        </div>
                    </div>

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <Table>
                            <Table.Head>
                                {['No', 'Kode Kategori', 'Nama Kategori', 'Deskripsi', 'Aksi'].map((header, index) => (
                                    <Table.HeadCell key={index}>{header}</Table.HeadCell>
                                ))}
                            </Table.Head>
                            <Table.Body>
                                {categoryData.map((category, index) => (
                                    <Table.Row key={index}>
                                        <Table.Cell>{index + 1}</Table.Cell>
                                        <Table.Cell>{category.kodeKategori}</Table.Cell>
                                        <Table.Cell>{category.namaKategori}</Table.Cell>
                                        <Table.Cell>{category.deskripsi}</Table.Cell>
                                        <Table.Cell>
                                            <div className="flex space-x-2">
                                                <Button size="xs" color="info" onClick={() => console.log('Edit')}>
                                                    <FaEdit />
                                                </Button>
                                                <Button size="xs" color="failure" onClick={() => console.log('Delete')}>
                                                    <FaTrash />
                                                </Button>
                                            </div>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
