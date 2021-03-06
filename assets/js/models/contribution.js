OpenDisclosure.Contribution = Backbone.Model.extend({
  typeName : function() {
    if (this.attributes.type == 'contribution') {
      return ''; // 'nuff said
    } else if (this.attributes.type == 'loan') {
      return ' (Loan)';
    } else if (this.attributes.type == 'independent') {
      return ' (Independent committee expenditure)';
    }
  },
  contributorLinkPath : function() {
    // TODO: maybe DRY this up by calling OpenDisclosure.Contributor, but I like
    // this here for performance reasons.
    return '/contributor/' + this.attributes.contributor.id;
  },

  recipientLinkPath : function() {
    var recipient = new OpenDisclosure.Candidate(this.attributes.recipient);
    return recipient.linkPath();
  }
});

OpenDisclosure.EmployerContribution = Backbone.Model.extend({
  employerLinkPath : function () {
    return '/employer/' + this.attributes.contrib + '/' + this.attributes.employer_id;
  }
});

OpenDisclosure.Employee = Backbone.Model.extend({
});

OpenDisclosure.CategoryContribution = Backbone.Model.extend({
});

OpenDisclosure.Whale = Backbone.Model.extend({
});

OpenDisclosure.Multiple = Backbone.Model.extend({
});

OpenDisclosure.IEC = Backbone.Model.extend({
});

OpenDisclosure.Contributor = Backbone.Model.extend({
  linkPath : function() {
    return '/contributor/' + this.attributes.id;
  },
});
