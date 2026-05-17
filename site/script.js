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
        'neutrophil': "Neutrophils are a type of immune cell that hunts and kills bacteria. They do this by wrapping their cell membrane around an invader, trapping it and allowing the neutrophil to dump lethal enzymes into the membrane tearing the pathogens cell walls and guts. If the bacteria is too large to fit in their membrane, they undergo specialised suicide and burst open and expel their DNA, forming a web trap to disable and slow down larger and other bacteria. Because of their incredibly destructive abilities and possible harm to friendly cells they perform cell death (apoptosis) once the threat is neutralised or after a short period without any threats.",
        'macrophage': "Macrophages are specialised immune cells that are generally the first line of defense against infections. They typically eat anything unwanted like pathogens or dying cells by physically engulfing and digesting them. When a site is heavily infected, macrophages will release cytokines and message other immune cells to the site of injury, and increase the inflammation which dilates the blood vessels and floods the area with fluids allowing the other immune cells to reach the site quicker. Later after the infection macrophages will shift their functionality into cleaning up dead cells and lowering the inflammation and immune response.",
        'natural killer': "NK cells destroy virally infected cells and tumor cells.",
        'mast': "Mast cells release histamine during allergic reactions.",
        'T': "T cells are the 'generals' that coordinate the adaptive response.",
        'B': "B cells produce antibodies to neutralize specific threats."
    };

    return descriptions[name]
}