export const AttachmentsConfig = {
  projects: {
    loadUrl: 'projects/{projectId}',
    uploadUrl: '/addattachment?id=Projects/{projectId}',
    removeUrl: 'Projects/{projectId}/{fileName}'
  },
  requirements: {
    loadUrl: 'projects/{projectId}/requirements/{requirementId}',
    uploadUrl:
      '/addattachment?id=/Projects/{projectId}/Requirements/{requirementId}',
    removeUrl: 'Projects/{projectId}/requirements/{requirementId}/{fileName}'
  },
  solutions: {
    loadUrl: 'projects/{projectId}/solutions/{solutionId}',
    uploadUrl: '/addattachment?id=/Projects/{projectId}/Solutions/{solutionId}',
    removeUrl: 'Projects/{projectId}/solutions/{solutionId}/{fileName}'
  },
  testscenarios: {
    loadUrl: 'projects/{projectId}/testScenarios/{testScenarioId}',
    uploadUrl:
      '/addattachment?id=/Projects/{projectId}/TestScenarios/{testScenarioId}',
    removeUrl: 'Projects/{projectId}/testScenarios/{testScenarioId}/{fileName}'
  },
  testcases: {
    loadUrl:
      'projects/{projectId}/testScenarios/{testScenarioId}/testCases/{testCaseId}',
    uploadUrl:
      '/addattachment?id=/Projects/{projectId}/TestScenarios/{testScenarioId}/TestCases/{testCaseId}',
    removeUrl:
      'Projects/{projectId}/testScenarios/{testScenarioId}/testCases/{testCaseId}/{fileName}'
  },
  issues: {
    loadUrl: 'projects/{projectId}/issues/{issueId}',
    uploadUrl: '/addattachment?id=/Projects/{projectId}/Issues/{issueId}',
    removeUrl: 'Projects/{projectId}/issues/{issueId}/{fileName}'
  }
};
