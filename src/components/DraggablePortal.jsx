// Drag portal utility
import { createPortal } from 'react-dom';

// Create portal container
const portal = document.createElement('div');
portal.classList.add('drag-portal');
document.body.appendChild(portal);

// Render dragging items to portal
export const DraggablePortal = ({ children, snapshot }) => {
    if (snapshot.isDragging) {
        return createPortal(children, portal);
    }
    return children;
};

export default DraggablePortal;
