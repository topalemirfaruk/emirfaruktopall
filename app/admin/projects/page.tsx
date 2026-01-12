import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { PlusCircle, Pencil, Eye } from "lucide-react"
import { DeleteButton } from "@/components/delete-button"

async function getProjects() {
    return await prisma.article.findMany({
        where: { category: "Projeler" },
        orderBy: { createdAt: "desc" },
    })
}

export default async function ProjectsPage() {
    const projects = await getProjects()

    return (
        <div className="p-8 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-white">Projeler</h1>
                <Link
                    href="/admin/projects/new"
                    className="flex items-center gap-2 px-4 py-2 bg-[#22c55e] text-black font-semibold rounded hover:bg-[#16a34a] transition-colors"
                >
                    <PlusCircle className="w-5 h-5" />
                    Yeni Proje Ekle
                </Link>
            </div>

            <div className="bg-[#0d120d] border border-[#1a2e1a] rounded-lg overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-[#0f160f] border-b border-[#1a2e1a]">
                        <tr>
                            <th className="px-6 py-4 text-[#6b7280] font-medium text-sm">Proje Adı</th>
                            <th className="px-6 py-4 text-[#6b7280] font-medium text-sm">GitHub URL</th>
                            <th className="px-6 py-4 text-[#6b7280] font-medium text-sm">Tarih</th>
                            <th className="px-6 py-4 text-[#6b7280] font-medium text-sm text-right">İşlemler</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#1a2e1a]">
                        {projects.map((project: any) => (
                            <tr key={project.id} className="hover:bg-[#1a2e1a]/20 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="text-white font-medium">{project.title}</div>
                                    <div className="text-[#6b7280] text-xs mt-1 truncate max-w-xs">{project.slug}</div>
                                </td>
                                <td className="px-6 py-4">
                                    <a
                                        href={project.githubUrl || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#22c55e] hover:underline text-sm truncate max-w-xs block"
                                    >
                                        {project.githubUrl || "-"}
                                    </a>
                                </td>
                                <td className="px-6 py-4 text-[#b0b0b0] text-sm">{project.date}</td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <Link
                                            href={project.githubUrl || "#"}
                                            target="_blank"
                                            className="p-2 text-[#6b7280] hover:text-white transition-colors"
                                            title="Görüntüle"
                                        >
                                            <Eye className="w-4 h-4" />
                                        </Link>
                                        <Link
                                            href={`/admin/projects/${project.id}`}
                                            className="p-2 text-[#6b7280] hover:text-[#22c55e] transition-colors"
                                            title="Düzenle"
                                        >
                                            <Pencil className="w-4 h-4" />
                                        </Link>
                                        <DeleteButton id={project.id} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {projects.length === 0 && (
                    <div className="p-8 text-center text-[#6b7280]">
                        Henüz hiç proje eklenmemiş.
                    </div>
                )}
            </div>
        </div>
    )
}
