import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import Alert from '@/components/ui/alert/Alert';
import AlertDescription from '@/components/ui/alert/AlertDescription';
import AlertTitle from '@/components/ui/alert/AlertTitle';

export {
  AlertTitle,
  AlertDescription,
  Alert
}

export const alertVariants = cva(
  'relative w-full rounded-lg border p-4 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive:
          'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export type AlertVariants = VariantProps<typeof alertVariants>;
