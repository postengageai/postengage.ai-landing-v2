type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value?: number;
};

// Declare gtag as a global function
declare global {
  interface Window {
    gtag: (
      command: 'event',
      action: string,
      params: {
        event_category: string;
        event_label: string;
        value?: number;
      }
    ) => void;
  }
}

export const sendGAEvent = ({ action, category, label, value }: GTagEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
