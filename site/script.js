function zoom(el) {
    const sidebar = document.querySelector('.sidebar');
    const sidebarTitle = document.getElementById('sidebar-title')
    const sidebarDescription = document.getElementById('sidebar-description')
    if (el.classList.contains('is-fullscreen')) {
        el.style.transform = '';
        el.classList.remove('is-fullscreen');
        sidebarTitle.innerText = '';
        sidebarDescription.innerText = '';
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
    const exactCellname = el.alt.replace(' cell vector drawing', '')
    sidebarTitle.innerText = exactCellname + ' ' + "cell";
    sidebarDescription.innerText = getCellDescription(exactCellname);
}

function getCellDescription(name) {
    const descriptions = {
        'dendritic': "Dendritic cells are messengers that present antigens to T cells.",
        'neutrophil': "Neutrophils are the first responders to infection, eating pathogens.",
        'macrophage': "Macrophages are 'big eaters' that clean up debris and dead cells.",
        'natural killer': "NK cells destroy virally infected cells and tumor cells.",
        'mast': "Mast cells release histamine during allergic reactions.",
        'T': "T cells are the 'generals' that coordinate the adaptive response.",
        'B': "B cells produce antibodies to neutralize specific threats."
    };

    return descriptions[name]
}