import { onecopy, enhancedElements1 } from './onecopy.mjs';

function removeCopy() {
    enhancedElements1.forEach((ee) => {
        ee.element.removeEventListener('click', ee.copied);
    });
}

export default removeCopy;
