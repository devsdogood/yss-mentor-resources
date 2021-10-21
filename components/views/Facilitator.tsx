import Image from 'next/image';
import { IFacilitator } from "../../@types/generated/contentful";

type FacilitatorProps = {
    entry: IFacilitator;
}

const Facilitator: React.FC<FacilitatorProps> = ({ entry }) => {
    const image = entry.fields.image;

    return (
        <>
            <div style={{height: '20vh', width: '300px', position: 'relative'}}>
                <Image src={`https:${image.fields.file.url}`} alt={image.fields.description} layout='fill' />
            </div>
            <b>facilitator</b> {entry.fields.name} from {entry.fields.district}
        </>
    );
};

export default Facilitator;
