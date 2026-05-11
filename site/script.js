function zoom(el) {
    const sidebar = document.querySelector('.sidebar');
    const sidebarTitle = document.getElementById('sidebar-title')
    const sidebarDescription = document.getElementById('sidebar-description')
    if (el.classList.contains('is-fullscreen')) {
        el.style.transform = '';
        el.classList.remove('is-fullscreen');
        sidebarTitle.innerText = '';
        sidebarDescription.innerText = '';
        sidebar.style.display = 'none';
        return;
    }
    const activeImage = document.querySelector('.is-fullscreen');
    if (activeImage) {
        return;
    }

    const rect = el.getBoundingClientRect();
    
    const screenCenterX = window.innerWidth / 4;
    const screenCenterY = window.innerHeight / 2;

    const elementCenterX = rect.left + rect.width / 2;
    const elementCenterY = rect.top + rect.height / 2;

    const xMove = screenCenterX - elementCenterX;
    const yMove = screenCenterY - elementCenterY;

    el.style.transform = `translate(${xMove}px, ${yMove}px) scale(3)`;
    el.classList.add('is-fullscreen');
    sidebar.style.display = 'block';
    const exactCellname = el.alt.replace(' cell vector drawing', '')
    sidebarTitle.innerText = exactCellname.charAt(0).toUpperCase() + exactCellname.slice(1) + ' ' + "Cell";
    sidebarDescription.innerText = getCellDescription(exactCellname);
}

function getCellDescription(name) {
    const descriptions = {
        'dendritic': "A dendritic cell is a type of immune cell that captures and processes pathogens by grabbing them with their long arms and engulfing them and breaking them down into smaller pieces or antigens. They are generally positioned in tissues close to the external environment (skin, lungs, gut) and constantly scans for these pathogens. When the dendritic cells have enough antigens, they move towards the lymph nodes, to present them on their body to naive T Cells, which will coordinate a precise immune response by the T Cells.",
        'neutrophil': "Neutrophils are the first responders to infection, eating pathogens.",
        'macrophage': "Macrophages are 'big eaters' that clean up debris and dead cells.",
        'natural killer': "NK cells destroy virally infected cells and tumor cells.",
        'mast': "Mast cells release histamine during allergic reactions.",
        'T': "T cells are the 'generals' that coordinate the adaptive response.",
        'B': "B cells produce antibodies to neutralize specific threats."
    };

    return descriptions[name]
}