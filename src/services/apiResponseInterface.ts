type ApiResponse = {
  date: string;
  name: string;
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
          };
        },
        {
          team: {
            shortDisplayName: string;
            nickname: string;
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
