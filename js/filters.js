angular.module("filters", []).filter("searchFilter", () => {
    return (data, searchType, searchText) => {
      if (!searchText) {
        return data;
      }
  
      let keyword = RegExp(searchText, "i");
      return data.filter((item) => {
        switch (searchType) {
          case "lname":
            return keyword.test(item.model);
          case "brand":
            return keyword.test(item.brand);
          case "cname":
            return keyword.test(item.name);
          case "date":
            return keyword.test(item.created_on);
        }
      });
    };
  });