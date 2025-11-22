// Example usage of Risk Due Diligence Module
const {
    performRiskDueDiligence,
    generateRiskReport
} = require('./riskDueDiligence');

// Example 1: Low-risk company
const lowRiskCompany = {
    companyName: 'TechCorp Solutions',
    industry: 'Technology',
    financialMetrics: {
        debtToEquityRatio: 0.5,
        currentRatio: 2.0,
        profitMargin: 15,
        cashFlow: 1000000
    },
    operationalMetrics: {
        employeeTurnover: 8,
        supplyChainDependency: 30,
        technologyAge: 2,
        hasBusinessContinuity: true
    },
    complianceMetrics: {
        regulatoryViolations: 0,
        hasCertifications: true,
        dataBreaches: 0,
        auditsPassed: true
    },
    reputationalMetrics: {
        mediaScore: 75,
        customerSatisfaction: 85,
        legalDisputes: 1,
        hasESGPolicy: true
    }
};

// Example 2: High-risk company
const highRiskCompany = {
    companyName: 'Struggling Industries Inc',
    industry: 'Manufacturing',
    financialMetrics: {
        debtToEquityRatio: 2.5,
        currentRatio: 0.8,
        profitMargin: -5,
        cashFlow: -500000
    },
    operationalMetrics: {
        employeeTurnover: 25,
        supplyChainDependency: 80,
        technologyAge: 12,
        hasBusinessContinuity: false
    },
    complianceMetrics: {
        regulatoryViolations: 6,
        hasCertifications: false,
        dataBreaches: 3,
        auditsPassed: false
    },
    reputationalMetrics: {
        mediaScore: -60,
        customerSatisfaction: 45,
        legalDisputes: 12,
        hasESGPolicy: false
    }
};

// Example 3: Medium-risk company
const mediumRiskCompany = {
    companyName: 'Retail Growth LLC',
    industry: 'Retail',
    financialMetrics: {
        debtToEquityRatio: 1.2,
        currentRatio: 1.3,
        profitMargin: 8,
        cashFlow: 200000
    },
    operationalMetrics: {
        employeeTurnover: 15,
        supplyChainDependency: 55,
        technologyAge: 6,
        hasBusinessContinuity: true
    },
    complianceMetrics: {
        regulatoryViolations: 2,
        hasCertifications: true,
        dataBreaches: 1,
        auditsPassed: true
    },
    reputationalMetrics: {
        mediaScore: 20,
        customerSatisfaction: 72,
        legalDisputes: 3,
        hasESGPolicy: true
    }
};

// Perform risk assessments
console.log('\n========== RISK DUE DILIGENCE ASSESSMENTS ==========\n');

console.log('Assessment 1: Low-Risk Company');
const lowRiskProfile = performRiskDueDiligence(lowRiskCompany);
console.log(generateRiskReport(lowRiskProfile));

console.log('\nAssessment 2: High-Risk Company');
const highRiskProfile = performRiskDueDiligence(highRiskCompany);
console.log(generateRiskReport(highRiskProfile));

console.log('\nAssessment 3: Medium-Risk Company');
const mediumRiskProfile = performRiskDueDiligence(mediumRiskCompany);
console.log(generateRiskReport(mediumRiskProfile));

// Summary comparison
console.log('\n========== COMPARATIVE SUMMARY ==========\n');
console.log(`${lowRiskCompany.companyName}: ${lowRiskProfile.riskLevel} Risk (Score: ${lowRiskProfile.overallRiskScore})`);
console.log(`${highRiskCompany.companyName}: ${highRiskProfile.riskLevel} Risk (Score: ${highRiskProfile.overallRiskScore})`);
console.log(`${mediumRiskCompany.companyName}: ${mediumRiskProfile.riskLevel} Risk (Score: ${mediumRiskProfile.overallRiskScore})`);
console.log('\n');
