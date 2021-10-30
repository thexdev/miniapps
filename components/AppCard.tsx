import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  name: string;
  icon: string;
  description: string;
  href: string;
}

const AppCard: React.FC<IProps> = (props: IProps) => {
  return (
    <Link href={props.href}>
      <a className="flex">
        <div className="mr-3">
          <div className="p-3 bg-gray-100 rounded-lg">
            <Image width="48" height="48" src={props.icon} alt={props.name} />
          </div>
        </div>
        <div>
          <h2 className="mb-2 font-semibold lg:text-lg">{props.name}</h2>
          <p className="text-sm text-gray-500">{props.description}</p>
        </div>
      </a>
    </Link>
  );
};

export default AppCard;
