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
        'natural killer': "Natural Killer cells are specialised immune cells designed to locate and kill cancerous and virally infected cells. Cells have a system of cell surface proteins called the MHC-1 (similarly to the dendritic cell’s arms) which display antigens showing what is happening inside the cells, NK cells can often recognise when a cell is infected because these infected cells typically hide or remove the MHC-1, or displays corrupted or mutated antigens. When a NK cell finds such cell they tell the cell to commit apoptosis (controlled cell suicide). Unlike T cells which require the very specific antigens of the virus or cancer in the first place to recognise infectious cells the NK cells bypasses this requirement completely.",
        'mast': "Mast cells are immune cells that are designed to fight parasites and bacteria, though are also the reason why they cause allergic reactions due to their histamine production. Mast cells are covered in special receptors that allow them to recognise general bacteria or parasites, and immediately reacts by releasing large amounts of histamine and inflammatory cytokines to flush the parasite from the system while alerting the site of a threat. Appearing in many people, allergic reactions are caused by mast cells mistaking harmless substances such as pollen as threats and causing these reactions.",
        'T': "T cells, which are part of the adaptive immune system, orchestrate immune responses and destroy infected or cancerous cells. There are three types of T cells, the first and most common being the Helper T cell. When an infection is detected the Helper T cell releases cytokines (chemical messages) to activate and direct other immune cells to target an area and the same otherwise where they can order all immune cells to calm down after the infection disappears. The Helper T cells can activate existing macrophages into “killer” macrophages which turn highly aggressive that quickly multiply and continue helping until the T cell directs them to stop. Other T cells can also be activated into Killer T cells that can directly identify and bind to cancer or viral cells the same as NK cells and release toxic chemicals into them, though unlike the NK cells they need specific antigens about the infected cells to identify other cells. The final form of T cells are the memory T cells which “remember” previously encountered pathogens and when the pathogens re-enter these memory T cells trigger a more targeted immune response against them by multiplying themselves and other relevant T cells quickly while holding that same antigen they have about the pathogen, this is known as (adaptive) immunity.",
        'B': "B cells are adaptive immune cells that recognise viruses and bacteria then produce millions of targeted antibodies to neutralise the threat. Antibodies are special claw shaped proteins that can bind to bacteria and cripple them, marking them for destruction by other immune cells. One B cell can only produce a specific shape of antibody, which may not be be able to attach to the target bacteria, so T cells are designed to seek out the correct B cells that have a correct size, and convert them into Plasma B cells which rapidly multiply and produce targeted antibodies against the invaders. Later on, the B cells will turn into Memory B cells like the Memory T Cells, which remain in the body for years producing low amounts of antibodies against that specific bacteria helping immunity against it."
    };

    return descriptions[name]
}