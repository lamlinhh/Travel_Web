import DestinationDetail from '@/components/destinations/[id]';
import { Metadata } from 'next';

interface Props {
  params: {
    id: string;
  };
}

export const metadata: Metadata = {
  title: 'Destination Detail',
  description: 'Explore this destination in detail',
};

export default async function DestinationDetailPage({ params }: Props) {
  // Decode the ID and convert to lowercase
  const id = decodeURIComponent(await params.id).toLowerCase();
  
  return <DestinationDetail id={id} />;
} 