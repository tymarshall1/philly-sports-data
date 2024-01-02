type ApiResponse = {
  date: string;
  name: string;
  events: [];
  competitions: [
    {
      competitors: [
        {
          score: {
            displayValue: string;
          };
          team: {
            nickname: string;
          };
        },
        {
          team: {
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
