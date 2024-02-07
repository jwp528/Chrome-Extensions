function getCurrentTab(callback) {
    let queryOptions = { active: true, lastFocusedWindow: true };
    chrome.tabs.query(queryOptions, ([tab]) => {
      if (chrome.runtime.lastError){
        console.error(chrome.runtime.lastError);
      }
      
      // `tab` will either be a `tabs.Tab` instance or `undefined`.
      const url = `https://vscode.dev/${tab.url}`;
      window.open(url);
    });
  }

  getCurrentTab();