import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CustomCardProps {
  title: string;
  data: string;
}

export default function CustomCard({ data, title }: CustomCardProps) {
  return (
    <Card className="space-y-6 bg-white dark:bg-primary_dark shadow-xl shadow-primary/50 dark:shadow-white/10 rounded-2xl w-full">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-4xl font-bold text-center">
        <p>{data}</p>
      </CardContent>
    </Card>
  );
}
