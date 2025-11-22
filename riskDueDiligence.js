// Risk Due Diligence Module for Companies
// Provides comprehensive risk assessment functionality

/**
 * Company Risk Profile
 * @typedef {Object} CompanyRiskProfile
 * @property {string} companyName - Name of the company
 * @property {string} industry - Industry sector
 * @property {number} financialRisk - Financial risk score (0-100)
 * @property {number} operationalRisk - Operational risk score (0-100)
 * @property {number} complianceRisk - Compliance risk score (0-100)
 * @property {number} reputationalRisk - Reputational risk score (0-100)
 * @property {number} overallRiskScore - Overall risk score (0-100)
 * @property {string} riskLevel - Risk level (Low, Medium, High, Critical)
 */

/**
 * Calculate financial risk based on company financial metrics
 * @param {Object} financialMetrics - Financial data
 * @param {number} financialMetrics.debtToEquityRatio - Debt to equity ratio
 * @param {number} financialMetrics.currentRatio - Current ratio (liquidity)
 * @param {number} financialMetrics.profitMargin - Profit margin percentage
 * @param {number} financialMetrics.cashFlow - Cash flow health (positive/negative)
 * @returns {number} Financial risk score (0-100)
 */
function calculateFinancialRisk(financialMetrics) {
    let riskScore = 0;
    
    // High debt to equity ratio increases risk
    if (financialMetrics.debtToEquityRatio > 2.0) {
        riskScore += 30;
    } else if (financialMetrics.debtToEquityRatio > 1.0) {
        riskScore += 15;
    }
    
    // Low current ratio indicates liquidity issues
    if (financialMetrics.currentRatio < 1.0) {
        riskScore += 25;
    } else if (financialMetrics.currentRatio < 1.5) {
        riskScore += 10;
    }
    
    // Low or negative profit margin is risky
    if (financialMetrics.profitMargin < 0) {
        riskScore += 30;
    } else if (financialMetrics.profitMargin < 5) {
        riskScore += 15;
    }
    
    // Negative cash flow is a red flag
    if (financialMetrics.cashFlow < 0) {
        riskScore += 15;
    }
    
    return Math.min(riskScore, 100);
}

/**
 * Calculate operational risk based on company operations
 * @param {Object} operationalMetrics - Operational data
 * @param {number} operationalMetrics.employeeTurnover - Employee turnover rate percentage
 * @param {number} operationalMetrics.supplyChainDependency - Supply chain concentration (0-100)
 * @param {number} operationalMetrics.technologyAge - Age of core technology in years
 * @param {boolean} operationalMetrics.hasBusinessContinuity - Has business continuity plan
 * @returns {number} Operational risk score (0-100)
 */
function calculateOperationalRisk(operationalMetrics) {
    let riskScore = 0;
    
    // High employee turnover indicates instability
    if (operationalMetrics.employeeTurnover > 20) {
        riskScore += 25;
    } else if (operationalMetrics.employeeTurnover > 10) {
        riskScore += 10;
    }
    
    // High supply chain dependency is risky
    if (operationalMetrics.supplyChainDependency > 70) {
        riskScore += 20;
    } else if (operationalMetrics.supplyChainDependency > 50) {
        riskScore += 10;
    }
    
    // Outdated technology increases risk
    if (operationalMetrics.technologyAge > 10) {
        riskScore += 25;
    } else if (operationalMetrics.technologyAge > 5) {
        riskScore += 15;
    }
    
    // Lack of business continuity plan
    if (!operationalMetrics.hasBusinessContinuity) {
        riskScore += 30;
    }
    
    return Math.min(riskScore, 100);
}

/**
 * Calculate compliance risk based on regulatory adherence
 * @param {Object} complianceMetrics - Compliance data
 * @param {number} complianceMetrics.regulatoryViolations - Number of violations in last 3 years
 * @param {boolean} complianceMetrics.hasCertifications - Has industry certifications (ISO, SOC2, etc)
 * @param {number} complianceMetrics.dataBreaches - Number of data breaches
 * @param {boolean} complianceMetrics.auditsPassed - Recent audits passed
 * @returns {number} Compliance risk score (0-100)
 */
function calculateComplianceRisk(complianceMetrics) {
    let riskScore = 0;
    
    // Regulatory violations are serious
    if (complianceMetrics.regulatoryViolations > 5) {
        riskScore += 40;
    } else if (complianceMetrics.regulatoryViolations > 2) {
        riskScore += 25;
    } else if (complianceMetrics.regulatoryViolations > 0) {
        riskScore += 10;
    }
    
    // Lack of certifications indicates compliance gaps
    if (!complianceMetrics.hasCertifications) {
        riskScore += 15;
    }
    
    // Data breaches are critical
    if (complianceMetrics.dataBreaches > 2) {
        riskScore += 30;
    } else if (complianceMetrics.dataBreaches > 0) {
        riskScore += 15;
    }
    
    // Failed audits indicate problems
    if (!complianceMetrics.auditsPassed) {
        riskScore += 15;
    }
    
    return Math.min(riskScore, 100);
}

/**
 * Calculate reputational risk based on public perception
 * @param {Object} reputationalMetrics - Reputational data
 * @param {number} reputationalMetrics.mediaScore - Media sentiment score (-100 to 100)
 * @param {number} reputationalMetrics.customerSatisfaction - Customer satisfaction percentage
 * @param {number} reputationalMetrics.legalDisputes - Number of ongoing legal disputes
 * @param {boolean} reputationalMetrics.hasESGPolicy - Has environmental, social, governance policy
 * @returns {number} Reputational risk score (0-100)
 */
function calculateReputationalRisk(reputationalMetrics) {
    let riskScore = 0;
    
    // Negative media coverage
    if (reputationalMetrics.mediaScore < -50) {
        riskScore += 35;
    } else if (reputationalMetrics.mediaScore < 0) {
        riskScore += 20;
    }
    
    // Low customer satisfaction
    if (reputationalMetrics.customerSatisfaction < 50) {
        riskScore += 25;
    } else if (reputationalMetrics.customerSatisfaction < 70) {
        riskScore += 10;
    }
    
    // Legal disputes impact reputation
    if (reputationalMetrics.legalDisputes > 10) {
        riskScore += 25;
    } else if (reputationalMetrics.legalDisputes > 5) {
        riskScore += 15;
    }
    
    // Lack of ESG policy is increasingly risky
    if (!reputationalMetrics.hasESGPolicy) {
        riskScore += 15;
    }
    
    return Math.min(riskScore, 100);
}

/**
 * Determine risk level based on overall score
 * @param {number} overallScore - Overall risk score (0-100)
 * @returns {string} Risk level classification
 */
function determineRiskLevel(overallScore) {
    if (overallScore < 25) {
        return 'Low';
    } else if (overallScore < 50) {
        return 'Medium';
    } else if (overallScore < 75) {
        return 'High';
    } else {
        return 'Critical';
    }
}

/**
 * Perform comprehensive risk due diligence on a company
 * @param {Object} companyData - Complete company data
 * @param {string} companyData.companyName - Company name
 * @param {string} companyData.industry - Industry sector
 * @param {Object} companyData.financialMetrics - Financial metrics
 * @param {Object} companyData.operationalMetrics - Operational metrics
 * @param {Object} companyData.complianceMetrics - Compliance metrics
 * @param {Object} companyData.reputationalMetrics - Reputational metrics
 * @returns {CompanyRiskProfile} Complete risk profile
 */
function performRiskDueDiligence(companyData) {
    const financialRisk = calculateFinancialRisk(companyData.financialMetrics);
    const operationalRisk = calculateOperationalRisk(companyData.operationalMetrics);
    const complianceRisk = calculateComplianceRisk(companyData.complianceMetrics);
    const reputationalRisk = calculateReputationalRisk(companyData.reputationalMetrics);
    
    // Calculate weighted overall risk score
    // Financial and compliance risks weighted higher
    const overallRiskScore = Math.round(
        (financialRisk * 0.35) +
        (operationalRisk * 0.25) +
        (complianceRisk * 0.30) +
        (reputationalRisk * 0.10)
    );
    
    const riskLevel = determineRiskLevel(overallRiskScore);
    
    return {
        companyName: companyData.companyName,
        industry: companyData.industry,
        financialRisk,
        operationalRisk,
        complianceRisk,
        reputationalRisk,
        overallRiskScore,
        riskLevel,
        assessmentDate: new Date().toISOString(),
        recommendations: generateRecommendations(financialRisk, operationalRisk, complianceRisk, reputationalRisk)
    };
}

/**
 * Generate recommendations based on risk scores
 * @param {number} financialRisk - Financial risk score
 * @param {number} operationalRisk - Operational risk score
 * @param {number} complianceRisk - Compliance risk score
 * @param {number} reputationalRisk - Reputational risk score
 * @returns {Array<string>} List of recommendations
 */
function generateRecommendations(financialRisk, operationalRisk, complianceRisk, reputationalRisk) {
    const recommendations = [];
    
    if (financialRisk > 50) {
        recommendations.push('Conduct detailed financial audit and review debt structure');
    }
    if (operationalRisk > 50) {
        recommendations.push('Review operational processes and business continuity planning');
    }
    if (complianceRisk > 50) {
        recommendations.push('Engage compliance experts and address regulatory violations');
    }
    if (reputationalRisk > 50) {
        recommendations.push('Implement reputation management and stakeholder engagement strategy');
    }
    
    if (financialRisk > 30 || operationalRisk > 30) {
        recommendations.push('Consider additional insurance coverage');
    }
    
    if (complianceRisk > 30) {
        recommendations.push('Regular compliance training for staff');
    }
    
    return recommendations;
}

/**
 * Generate a risk assessment report
 * @param {CompanyRiskProfile} riskProfile - Company risk profile
 * @returns {string} Formatted risk report
 */
function generateRiskReport(riskProfile) {
    let report = `\n${'='.repeat(60)}\n`;
    report += `RISK DUE DILIGENCE REPORT\n`;
    report += `${'='.repeat(60)}\n\n`;
    report += `Company: ${riskProfile.companyName}\n`;
    report += `Industry: ${riskProfile.industry}\n`;
    report += `Assessment Date: ${riskProfile.assessmentDate}\n\n`;
    report += `${'─'.repeat(60)}\n`;
    report += `RISK SCORES\n`;
    report += `${'─'.repeat(60)}\n`;
    report += `Financial Risk:      ${riskProfile.financialRisk}/100\n`;
    report += `Operational Risk:    ${riskProfile.operationalRisk}/100\n`;
    report += `Compliance Risk:     ${riskProfile.complianceRisk}/100\n`;
    report += `Reputational Risk:   ${riskProfile.reputationalRisk}/100\n\n`;
    report += `Overall Risk Score:  ${riskProfile.overallRiskScore}/100\n`;
    report += `Risk Level:          ${riskProfile.riskLevel}\n\n`;
    
    if (riskProfile.recommendations && riskProfile.recommendations.length > 0) {
        report += `${'─'.repeat(60)}\n`;
        report += `RECOMMENDATIONS\n`;
        report += `${'─'.repeat(60)}\n`;
        riskProfile.recommendations.forEach((rec, index) => {
            report += `${index + 1}. ${rec}\n`;
        });
    }
    
    report += `\n${'='.repeat(60)}\n`;
    
    return report;
}

// Export functions for use in other modules
module.exports = {
    calculateFinancialRisk,
    calculateOperationalRisk,
    calculateComplianceRisk,
    calculateReputationalRisk,
    performRiskDueDiligence,
    generateRiskReport,
    determineRiskLevel
};
