import './sources.css';
import { DataItem } from '../../interface/interface';

class Sources {
    draw(data: object[]): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement = document.querySelector('#sourceItemTemp');

        data.forEach((item: DataItem): void => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLTemplateElement;

            sourceClone.querySelector('.source__item-name').textContent = item.name;
            sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector('.sources').append(fragment);
    }
}

export default Sources;
