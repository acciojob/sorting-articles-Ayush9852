//your JS code here. If required.
		const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

        function stripArticles(bandName) {
            // Remove leading articles 'The', 'A', 'An'
            return bandName.replace(/^(the|a|an) /i, '').trim();
        }

        // Sort the bands ignoring articles
        const sortedBands = bands.sort((a, b) => {
            const nameA = stripArticles(a);
            const nameB = stripArticles(b);
            return nameA.localeCompare(nameB);
        });

        const bandList = document.getElementById('band');
        sortedBands.forEach(band => {
            const listItem = document.createElement('li');
            listItem.textContent = band;
            bandList.appendChild(listItem);
        });