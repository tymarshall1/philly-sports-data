type ApiResponse = {
  date: string;
  name: string;
  shortName: string;
  team: {
    recordSummary: string;
    standingSummary: string;
  };
  events: [];
  competitions: [
    {
      competitors: [
        {
          score: {
            displayValue: string;
          };
          team: {
            shortDisplayName: string;
            nickname: string;
            logos: [
              {
                href: string;
              }
            ];
          };
        },
        {
          team: {
            shortDisplayName: string;
            nickname: string;
            logos: [
              {
                href: string;
              }
            ];
          };
          score: {
            displayValue: string;
          };
        }
      ];
    }
  ];
};

export default ApiResponse;
