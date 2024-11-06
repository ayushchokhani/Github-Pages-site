/**
 * Converts an array of objects into an HTML table
 * @param {Array<Object>} data - Array of objects with Name, Age, and optional Gender properties
 * @returns {string} HTML table as a string
 */
export default function json2html(data) {
    // Input validation
    if (!Array.isArray(data)) {
        throw new Error('Input must be an array');
    }

    // Start building the table with the custom data-user attribute
    let html = '<table data-user="ayushchokhani15@gmail.com">\n';
    
    // Add table header
    html += '  <thead>\n';
    html += '    <tr><th>Name</th><th>Age</th><th>Gender</th></tr>\n';
    html += '  </thead>\n';
    
    // Add table body
    html += '  <tbody>\n';
    
    // Add each row of data
    data.forEach(person => {
        html += '    <tr>';
        html += `<td>${person.Name}</td>`;
        html += `<td>${person.Age}</td>`;
        html += `<td>${person.Gender || ''}</td>`;
        html += '</tr>\n';
    });
    
    // Close the table body and table
    html += '  </tbody>\n';
    html += '</table>';
    
    return html;
}
