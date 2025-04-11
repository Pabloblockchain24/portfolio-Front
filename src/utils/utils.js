export const handleDownloadCv = () => {
    const link = document.createElement('a');
    link.href = "../../../cv-Pablo_Arce_Paiva.pdf";
    link.download = 'CV-Pablo_Arce_Paiva.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
} 

export const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
}