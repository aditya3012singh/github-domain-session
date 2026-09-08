/**
 * DEVUP MULTIVERSE — APPLICATION CORE
 * Interactive logic for Stargate, 7 Universes, Git Terminal Simulator,
 * Holographic Pass Generator, and Poster Modal.
 */

// ============================================================
// 1. DATA: THE 7 UNIVERSES & TECH DOMAINS (From Poster)
// ============================================================
const UNIVERSES_DATA = {
    dark: {
        id: 'dark',
        name: 'Dark Universe',
        domain: 'CYBERSECURITY & SYSTEMS',
        hero: 'The Gotham Knight',
        dimension: 'Sector-001 // Nightfall',
        motto: 'DISCIPLINE BUILDS GREAT DEVELOPERS',
        subMotto: 'SAME SKILL DIFFERENT WORLDS',
        color: '#64748B',
        glow: 'rgba(100, 116, 139, 0.5)',
        image: 'assets/multiverse/batman.jpg',
        description: 'Vigilance and uncompromising precision. Great software isn\'t built in the daylight; it\'s forged through late-night commit reviews, clean git histories, zero breaking changes, and airtight cybersecurity.',
        technologies: ['Linux CLI', 'Bash Scripting', 'Cryptography', 'Network Protocols', 'GPG Signatures', 'OWASP Security'],
        specs: [
            { label: 'Tech Domain', value: 'Cybersecurity & Systems' },
            { label: 'Git Superpower', value: 'GPG Signed Commits & Secrets Auditing' },
            { label: 'Core Philosophy', value: 'Discipline Over Motivation' },
            { label: 'Review Standard', value: 'Strict 100% Zero-Trust PRs' }
        ],
        command: 'git commit -S -m "security(auth): enforce GPG signed commits & zero-trust"'
    },
    web: {
        id: 'web',
        name: 'Web Universe',
        domain: 'WEB DEV & FULL-STACK',
        hero: 'The Cyber Weaver',
        dimension: 'Earth-616 // Web-Verse',
        motto: 'CONNECTING IDEAS ACROSS WORLDS',
        subMotto: 'CODE CREATE COLLAB REPEAT',
        color: '#EF4444',
        glow: 'rgba(239, 68, 68, 0.5)',
        image: 'assets/multiverse/spidermecha.jpg',
        description: 'No developer is an island. The Web Universe powers everything you see and touch on the internet. Built on open-source webs, collaborative pull requests, modern JavaScript frameworks, and high-velocity shipping.',
        technologies: ['HTML5/CSS3', 'JavaScript/TypeScript', 'React & Next.js', 'Node.js & Express', 'REST & GraphQL', 'Tailwind CSS'],
        specs: [
            { label: 'Tech Domain', value: 'Frontend, Backend & Full-Stack' },
            { label: 'Git Superpower', value: 'Forking, Branches & Pull Requests' },
            { label: 'Core Philosophy', value: 'With Great Code Comes Great PRs' },
            { label: 'Network Effect', value: 'Global Open-Source Collaboration' }
        ],
        command: 'git request-pull v1.0 https://github.com/devup/web-verse.git'
    },
    innov: {
        id: 'innov',
        name: 'Innovation Universe',
        domain: 'AI, MACHINE LEARNING & CLOUD',
        hero: 'The Armored Architect',
        dimension: 'Earth-883 // Stark Labs',
        motto: 'BUILD DEPLOY EVOLVE',
        subMotto: 'GOOD DEVELOPERS BUILD BETTER WORLDS',
        color: '#F97316',
        glow: 'rgba(249, 115, 22, 0.5)',
        image: 'assets/multiverse/ironmech.jpg',
        description: 'Automate everything and bring intelligence to silicon. From training deep neural networks and LLMs to automated GitHub Actions CI/CD pipelines deployed to global clouds.',
        technologies: ['Python & PyTorch', 'HuggingFace & LLMs', 'Docker Containers', 'GitHub Actions CI/CD', 'AWS & Cloud', 'Data Pipelines'],
        specs: [
            { label: 'Tech Domain', value: 'AI / ML & Cloud Infrastructure' },
            { label: 'Git Superpower', value: 'CI/CD Pipelines & Automated Testing' },
            { label: 'Core Philosophy', value: 'Deploy Fast, Iterate Faster' },
            { label: 'Energy Core', value: 'Continuous Cloud Ship' }
        ],
        command: 'git push origin main && gh workflow run deploy-ai-agent.yml'
    },
    strength: {
        id: 'strength',
        name: 'Strength Universe',
        domain: 'DSA & PROBLEM SOLVING',
        hero: 'The Cyber Titan',
        dimension: 'Earth-Gamma // Titanium Core',
        motto: 'SMALL COMMITS BIG CHANGES',
        subMotto: 'MASSIVE ARCHITECTURE RESILIENCE',
        color: '#10B981',
        glow: 'rgba(16, 185, 129, 0.5)',
        image: 'assets/multiverse/titan.jpg',
        description: 'Colossal computational power and algorithmic mastery. The bedrock of software engineering interviews, competitive programming, and architecting scalable systems that never buckle under pressure.',
        technologies: ['C++ & STL', 'Java / Python', 'Data Structures', 'Dynamic Programming', 'System Design', 'LeetCode / Codeforces'],
        specs: [
            { label: 'Tech Domain', value: 'Data Structures & Algorithms' },
            { label: 'Git Superpower', value: 'Atomic Commits & Portfolio Tracking' },
            { label: 'Core Philosophy', value: 'Small Commits, Big Changes' },
            { label: 'Code Durability', value: 'Indestructible Logic' }
        ],
        command: 'git commit -m "feat(dsa): add O(log N) segment tree query solution"'
    },
    cosmic: {
        id: 'cosmic',
        name: 'Cosmic Universe',
        domain: 'OPEN SOURCE & GLOBAL TECH ECOSYSTEM',
        hero: 'The Celestial Empress',
        dimension: 'Dimension-X // Stellar Nebula',
        motto: 'EXPLORE LEARN COLLABORATE BEYOND',
        subMotto: 'EXPAND YOUR DEVELOPER HORIZON',
        color: '#A855F7',
        glow: 'rgba(168, 85, 247, 0.5)',
        image: 'assets/multiverse/sorceress.jpg',
        description: 'Transcend college boundaries into the infinite open-source universe. Contribute to international repositories, participate in Google Summer of Code (GSoC), and shape the future of global tech.',
        technologies: ['Open Source Tooling', 'GSoC Programs', 'GitHub Discussions', 'Hacktoberfest', 'Public Codebases', 'Remote Collaboration'],
        specs: [
            { label: 'Tech Domain', value: 'Open Source Software & Community' },
            { label: 'Git Superpower', value: 'Global GitHub Stargazing & Contributing' },
            { label: 'Core Philosophy', value: 'Infinite Exploration' },
            { label: 'Multiverse Reach', value: 'Universal Open Collaboration' }
        ],
        command: 'gh repo clone devup/multiverse-stargate && gh issue list'
    },
    speed: {
        id: 'speed',
        name: 'Speed Universe',
        domain: 'MOBILE & APP DEVELOPMENT',
        hero: 'The Lightning Speedster',
        dimension: 'Sector-Apex // Speed Force',
        motto: 'FASTER LEARNING BRIGHTER FUTURES',
        subMotto: 'LIGHTSPEED ITERATION & VELOCITY',
        color: '#FACC15',
        glow: 'rgba(250, 204, 21, 0.5)',
        image: 'assets/multiverse/flash.jpg',
        description: 'Ship apps into users\' pockets at hypersonic speed. Cross-platform mobile development with Flutter and React Native, rapid prototyping, and lightning-fast release cycles.',
        technologies: ['Flutter & Dart', 'React Native', 'Kotlin / Swift', 'Firebase Backend', 'Mobile UI/UX', 'App Store / Play Store'],
        specs: [
            { label: 'Tech Domain', value: 'Mobile Apps (iOS & Android)' },
            { label: 'Git Superpower', value: 'Rapid Branching & Release Tagging' },
            { label: 'Core Philosophy', value: 'Move Fast, Don\'t Break Main' },
            { label: 'Branch Switch Speed', value: '< 10 Milliseconds' }
        ],
        command: 'git tag -a v1.0.0 -m "Release: First production mobile app"'
    },
    tech: {
        id: 'tech',
        name: 'Tech Universe',
        domain: 'DEVOPS, LINUX & CLI TOOLING',
        hero: 'The Cyberpunk Netrunner',
        dimension: 'Neo-Sector // Terminal Core',
        motto: 'IDEAS INTO REALITY',
        subMotto: 'MASTERY OF THE COMMAND LINE',
        color: '#06B6D4',
        glow: 'rgba(6, 182, 212, 0.5)',
        image: 'assets/multiverse/hacker.jpg',
        description: 'Ditch the sluggish GUIs. The Terminal Core is where real developers work at maximum efficiency. Master Linux shells, Git CLI flags, SSH key handshakes, and developer productivity tooling.',
        technologies: ['Linux Terminal', 'Zsh & Bash', 'SSH Keys & Dotfiles', 'Docker & Kubernetes', 'Git CLI Mastery', 'Vim / Neovim'],
        specs: [
            { label: 'Tech Domain', value: 'DevOps & Developer Tooling' },
            { label: 'Git Superpower', value: 'Terminal CLI & Shell Scripting' },
            { label: 'Core Philosophy', value: 'Ideas Into Reality' },
            { label: 'Cryptographic Auth', value: 'SSH Ed25519 Hardware Keys' }
        ],
        command: 'git config --global alias.portal "log --graph --oneline --all"'
    }
};

// ============================================================
// 2. STARGATE PORTAL INTERACTION
// ============================================================
const NODE_EXPLANATIONS = {
    'branch-zenith': '🌿 git branch: Creates an alternate timeline parallel to the current reality.',
    'main': '🚀 main: The canonical production branch. Stable, tested, and sacred.',
    'feature': '✨ git checkout -b feature: Diverging into a focused exploration branch.',
    'commit': '💾 git commit: Saving a permanent cryptographic cryptographic snapshot of reality.',
    'push': '📤 git push: Transmitting your local timeline commits to the GitHub cloud nebula.',
    'merge': '🔀 git merge: Unifying parallel universe timelines into a harmonious single branch.'
};

function setupStargateInteractions() {
    const nodes = document.querySelectorAll('.portal-node');
    const popup = document.getElementById('nodeInfoPopup');
    const popupText = document.getElementById('nodeInfoText');

    nodes.forEach(node => {
        node.addEventListener('click', (e) => {
            const nodeKey = node.getAttribute('data-node');
            if (window.mvAudio) {
                const freqs = { 'main': 520, 'feature': 440, 'commit': 660, 'push': 780, 'merge': 880, 'branch-zenith': 960 };
                window.mvAudio.playPortalPulse(freqs[nodeKey] || 500);
            }

            nodes.forEach(n => n.classList.remove('active'));
            node.classList.add('active');

            if (popup && popupText && NODE_EXPLANATIONS[nodeKey]) {
                popupText.innerHTML = NODE_EXPLANATIONS[nodeKey];
                popup.classList.add('visible');
                clearTimeout(popup.timer);
                popup.timer = setTimeout(() => {
                    popup.classList.remove('visible');
                }, 4000);
            }
        });
    });
}

// ============================================================
// 3. UNIVERSE EXPLORER TABS
// ============================================================
function selectUniverse(univId) {
    const data = UNIVERSES_DATA[univId];
    if (!data) return;

    if (window.mvAudio) window.mvAudio.playWarpWhoosh();

    // Update active tab button
    document.querySelectorAll('.univ-tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-univ') === univId);
    });

    // Update Stage Elements
    const imgEl = document.getElementById('stageHeroImg');
    const badgeEl = document.getElementById('stageBadge');
    const heroNameEl = document.getElementById('stageHeroName');
    const heroQuoteEl = document.getElementById('stageHeroQuote');
    const tagEl = document.getElementById('intelUniverseTag');
    const titleEl = document.getElementById('intelMainTitle');
    const quoteTextEl = document.getElementById('intelQuoteText');
    const quoteSubEl = document.getElementById('intelQuoteSub');
    const descEl = document.getElementById('intelDescription');
    const specContainer = document.getElementById('intelSpecsContainer');
    const codeSnipEl = document.getElementById('intelCodeSnip');

    if (imgEl) {
        imgEl.style.opacity = '0.3';
        setTimeout(() => {
            imgEl.src = data.image;
            imgEl.alt = data.name;
            imgEl.style.opacity = '1';
        }, 150);
    }

    if (badgeEl) badgeEl.textContent = data.dimension;
    if (heroNameEl) heroNameEl.textContent = data.hero.toUpperCase();
    if (heroQuoteEl) heroQuoteEl.textContent = `"${data.motto}"`;
    if (tagEl) tagEl.textContent = `${data.dimension} // ${data.name.toUpperCase()}`;
    if (titleEl) titleEl.innerHTML = `${data.name} <span>&amp; GIT</span>`;
    if (quoteTextEl) quoteTextEl.textContent = data.motto;
    if (quoteSubEl) quoteSubEl.textContent = data.subMotto;
    if (descEl) descEl.textContent = data.description;

    if (specContainer) {
        specContainer.innerHTML = data.specs.map(s => `
            <div class="git-spec-box">
                <div class="spec-title">${s.label}</div>
                <div class="spec-val">${s.value}</div>
            </div>
        `).join('');
    }

    const roadmapContainer = document.getElementById('intelRoadmapContainer');
    if (roadmapContainer && data.technologies) {
        roadmapContainer.innerHTML = `
            <div class="domain-roadmap-box">
                <div class="domain-roadmap-title">
                    <span>⚡</span>
                    <span>RECOMMENDED 1ST-YEAR DOMAIN ROADMAP:</span>
                </div>
                <div class="domain-skills-pills">
                    ${data.technologies.map(t => `<span class="domain-skill-pill">${t}</span>`).join('')}
                </div>
            </div>
        `;
    }

    if (codeSnipEl) {
        codeSnipEl.innerHTML = `<code>${data.command}</code> <button class="btn-copy-snip" onclick="copySnippet('${data.command}')">COPY</button>`;
    }
}

function copySnippet(text) {
    navigator.clipboard.writeText(text).then(() => {
        if (window.mvAudio) window.mvAudio.playTerminalBlip();
        alert('Copied command to clipboard:\n' + text);
    });
}

// ============================================================
// 9. DOMAIN PATHFINDER QUIZ (For Freshers)
// ============================================================
function selectQuizAnswer(domainKey) {
    if (window.mvAudio) window.mvAudio.playSuccessChord();
    const data = UNIVERSES_DATA[domainKey];
    if (!data) return;

    const quizQuestions = document.getElementById('quizQuestionsView');
    const quizResult = document.getElementById('quizResultView');
    const resultTitle = document.getElementById('quizResultDomainTitle');
    const resultSub = document.getElementById('quizResultSub');
    const resultDesc = document.getElementById('quizResultDesc');
    const resultPills = document.getElementById('quizResultPills');

    if (quizQuestions) quizQuestions.style.display = 'none';
    if (quizResult) quizResult.style.display = 'block';

    if (resultTitle) resultTitle.textContent = `${data.name.toUpperCase()} (${data.domain})`;
    if (resultSub) resultSub.textContent = `Avatar: ${data.hero} · Motto: "${data.motto}"`;
    if (resultDesc) resultDesc.textContent = data.description;
    if (resultPills && data.technologies) {
        resultPills.innerHTML = data.technologies.map(t => `<span class="domain-skill-pill" style="background: rgba(255, 106, 0, 0.15); border-color: var(--color-fire-orange);">${t}</span>`).join('');
    }

    // Auto switch universe deck and auto-select on pass generator
    selectUniverse(domainKey);
    const passSelect = document.getElementById('passUnivSelect');
    if (passSelect) passSelect.value = domainKey;
}

function resetQuiz() {
    const quizQuestions = document.getElementById('quizQuestionsView');
    const quizResult = document.getElementById('quizResultView');
    if (quizQuestions) quizQuestions.style.display = 'block';
    if (quizResult) quizResult.style.display = 'none';
    if (window.mvAudio) window.mvAudio.playTerminalBlip();
}

// ============================================================
// 4. LIVE GIT CLI & SVG BRANCH SIMULATOR
// ============================================================
class GitSimulator {
    constructor() {
        this.currentBranch = 'main';
        this.branches = ['main'];
        this.staged = false;
        this.commits = [
            { id: 'c1', hash: '8a2f10', branch: 'main', msg: 'Initial commit (Setup repository)' }
        ];
        this.history = [];
        this.consoleBody = document.getElementById('terminalConsoleBody');
        this.inputField = document.getElementById('terminalInputField');
        this.svg = document.getElementById('gitGraphSvg');
        this.statusText = document.getElementById('graphStatusText');

        this.init();
    }

    init() {
        if (this.inputField) {
            this.inputField.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    const cmd = this.inputField.value.trim();
                    if (cmd) {
                        this.execute(cmd);
                        this.inputField.value = '';
                    }
                }
            });
        }
        this.renderGraph();
    }

    execute(cmdStr) {
        if (window.mvAudio) window.mvAudio.playTerminalBlip();
        this.appendLine(`devup@multiverse-nexus [${this.currentBranch}]$ ${cmdStr}`, 'prompt-cmd');

        const trimmed = cmdStr.trim();
        const parts = trimmed.split(/\s+/);

        if (parts[0] !== 'git' && trimmed !== 'clear' && trimmed !== 'help') {
            this.appendLine(`bash: ${parts[0]}: command not found. Try 'git help'`, 'out');
            return;
        }

        if (trimmed === 'clear') {
            if (this.consoleBody) this.consoleBody.innerHTML = '';
            return;
        }

        if (trimmed === 'help' || trimmed === 'git help' || trimmed === 'git --help') {
            this.appendLine(`Available Multiverse Git Commands:`, 'out-highlight');
            this.appendLine(`  git init                       - Initialize new Git multiverse repo`, 'out');
            this.appendLine(`  git status                     - Check file status and current branch`, 'out');
            this.appendLine(`  git add .                      - Stage all universe changes for commit`, 'out');
            this.appendLine(`  git commit -m "<msg>"          - Record snapshot to current branch`, 'out');
            this.appendLine(`  git branch -M main             - Rename branch to main`, 'out');
            this.appendLine(`  git checkout -b <branch>       - Create and switch to new branch`, 'out');
            this.appendLine(`  git checkout <branch>          - Switch to existing branch`, 'out');
            this.appendLine(`  git merge <branch>             - Merge specified branch into current`, 'out');
            this.appendLine(`  git push origin <branch>       - Push commits to GitHub remote`, 'out');
            this.appendLine(`  git log                        - Show commit timeline`, 'out');
            return;
        }

        const subCmd = parts[1];

        switch (subCmd) {
            case 'init':
                this.appendLine(`Initialized empty Git repository in /devup-multiverse/.git/`, 'out-success');
                break;

            case 'status':
                this.appendLine(`On branch ${this.currentBranch}`, 'out-highlight');
                if (this.staged) {
                    this.appendLine(`Changes to be committed:`, 'out-success');
                    this.appendLine(`  (use "git restore --staged <file>..." to unstage)`, 'out');
                    this.appendLine(`    new file:   multiverse_portal.config`, 'out-success');
                    this.appendLine(`    new file:   stargate_matrix.py`, 'out-success');
                } else {
                    this.appendLine(`Untracked files:`, 'out');
                    this.appendLine(`  (use "git add <file>..." to include in what will be committed)`, 'out');
                    this.appendLine(`    multiverse_portal.config`, 'out');
                    this.appendLine(`    stargate_matrix.py`, 'out');
                }
                break;

            case 'add':
                this.staged = true;
                this.appendLine(`Staged all cosmic files for commit. Ready for git commit.`, 'out-success');
                break;

            case 'commit':
                if (!this.staged) {
                    this.appendLine(`No changes added to commit (use "git add" to stage files).`, 'out');
                    return;
                }
                let msg = 'Updated universe state';
                const mIdx = parts.indexOf('-m');
                if (mIdx !== -1 && parts[mIdx + 1]) {
                    msg = parts.slice(mIdx + 1).join(' ').replace(/^["']|["']$/g, '');
                }
                const newHash = Math.random().toString(16).substring(2, 8);
                this.commits.push({
                    id: 'c' + (this.commits.length + 1),
                    hash: newHash,
                    branch: this.currentBranch,
                    msg: msg
                });
                this.staged = false;
                this.appendLine(`[${this.currentBranch} ${newHash}] ${msg}`, 'out-success');
                this.appendLine(` 2 files changed, 84 insertions(+)`, 'out');
                this.renderGraph();
                break;

            case 'branch':
                if (parts[2] === '-M' && parts[3]) {
                    this.currentBranch = parts[3];
                    this.appendLine(`Renamed active branch to '${parts[3]}'`, 'out-success');
                } else {
                    this.branches.forEach(b => {
                        this.appendLine(`${b === this.currentBranch ? '* ' + b : '  ' + b}`, b === this.currentBranch ? 'out-highlight' : 'out');
                    });
                }
                break;

            case 'checkout':
            case 'switch':
                if (parts[2] === '-b' || parts[2] === '-c') {
                    const newBranch = parts[3];
                    if (!newBranch) {
                        this.appendLine(`fatal: specify a branch name`, 'out');
                        return;
                    }
                    if (!this.branches.includes(newBranch)) {
                        this.branches.push(newBranch);
                    }
                    this.currentBranch = newBranch;
                    this.appendLine(`Switched to a new branch '${newBranch}'`, 'out-success');
                } else if (parts[2]) {
                    const targetBranch = parts[2];
                    if (this.branches.includes(targetBranch)) {
                        this.currentBranch = targetBranch;
                        this.appendLine(`Switched to branch '${targetBranch}'`, 'out-success');
                    } else {
                        this.appendLine(`error: pathspec '${targetBranch}' did not match any file(s) known to git`, 'out');
                    }
                }
                this.renderGraph();
                break;

            case 'merge':
                const sourceBranch = parts[2];
                if (!sourceBranch) {
                    this.appendLine(`fatal: specify a branch to merge`, 'out');
                    return;
                }
                if (!this.branches.includes(sourceBranch)) {
                    this.appendLine(`fatal: '${sourceBranch}' does not point to a valid branch.`, 'out');
                    return;
                }
                const mergeHash = Math.random().toString(16).substring(2, 8);
                this.commits.push({
                    id: 'c' + (this.commits.length + 1),
                    hash: mergeHash,
                    branch: this.currentBranch,
                    msg: `Merge branch '${sourceBranch}' into ${this.currentBranch}`
                });
                this.appendLine(`Updating timelines... Fast-forward merge complete!`, 'out-success');
                this.appendLine(`Merged branch '${sourceBranch}' into '${this.currentBranch}' [commit ${mergeHash}]`, 'out-highlight');
                this.renderGraph();
                break;

            case 'push':
                this.appendLine(`Connecting to GitHub Multiverse Gateway (github.com/devup/session)...`, 'out');
                setTimeout(() => {
                    this.appendLine(`Enumerating objects: 6, done.`, 'out');
                    this.appendLine(`Writing objects: 100% (6/6), 8.42 KiB | 8.42 MiB/s, done.`, 'out');
                    this.appendLine(`To https://github.com/devup/session.git`, 'out');
                    this.appendLine(` * [new branch]      ${this.currentBranch} -> ${this.currentBranch}`, 'out-success');
                    this.appendLine(`⚡ Synced across all universes successfully!`, 'out-highlight');
                }, 300);
                break;

            case 'log':
                this.appendLine(`Multiverse Commit History:`, 'out-highlight');
                [...this.commits].reverse().forEach(c => {
                    this.appendLine(`commit ${c.hash} (${c.branch})`, 'out-success');
                    this.appendLine(`Author: DevUp Explorer <recruit@devup.club>`, 'out');
                    this.appendLine(`    ${c.msg}`, 'out');
                });
                break;

            default:
                this.appendLine(`git: '${subCmd}' is not a recognized command. Try 'git help'`, 'out');
        }

        if (this.statusText) {
            this.statusText.textContent = `Active Branch: ${this.currentBranch} | Commits: ${this.commits.length}`;
        }
    }

    appendLine(text, typeClass) {
        if (!this.consoleBody) return;
        const line = document.createElement('div');
        line.className = `term-line term-${typeClass}`;
        line.textContent = text;
        this.consoleBody.appendChild(line);
        this.consoleBody.scrollTop = this.consoleBody.scrollHeight;
    }

    renderGraph() {
        if (!this.svg) return;
        this.svg.innerHTML = '';

        const width = this.svg.clientWidth || 500;
        const height = this.svg.clientHeight || 320;
        const startX = 60;
        const mainY = height * 0.45;
        const featureY = height * 0.75;
        const spacingX = Math.min(70, (width - 120) / Math.max(1, this.commits.length));

        // Draw branch baseline lines
        const mainLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        mainLine.setAttribute('x1', '30');
        mainLine.setAttribute('y1', mainY);
        mainLine.setAttribute('x2', width - 30);
        mainLine.setAttribute('y2', mainY);
        mainLine.setAttribute('stroke', '#FF5A00');
        mainLine.setAttribute('stroke-width', '3');
        mainLine.setAttribute('stroke-dasharray', '4 4');
        mainLine.setAttribute('opacity', '0.4');
        this.svg.appendChild(mainLine);

        // Render commits and connectors
        this.commits.forEach((c, i) => {
            const cx = startX + i * spacingX;
            const isMain = c.branch === 'main';
            const cy = isMain ? mainY : featureY;

            // Connecting link from previous commit
            if (i > 0) {
                const prev = this.commits[i - 1];
                const prevX = startX + (i - 1) * spacingX;
                const prevY = prev.branch === 'main' ? mainY : featureY;

                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.setAttribute('d', `M ${prevX} ${prevY} C ${(prevX + cx) / 2} ${prevY}, ${(prevX + cx) / 2} ${cy}, ${cx} ${cy}`);
                path.setAttribute('fill', 'none');
                path.setAttribute('stroke', isMain ? '#FF7700' : '#06B6D4');
                path.setAttribute('stroke-width', '3');
                this.svg.appendChild(path);
            }

            // Commit Node circle
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', cx);
            circle.setAttribute('cy', cy);
            circle.setAttribute('r', '9');
            circle.setAttribute('fill', isMain ? '#FF5A00' : '#06B6D4');
            circle.setAttribute('stroke', '#FFFFFF');
            circle.setAttribute('stroke-width', '2');
            this.svg.appendChild(circle);

            // Hash label
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', cx);
            text.setAttribute('y', cy - 15);
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('fill', '#FFA800');
            text.setAttribute('font-family', 'JetBrains Mono');
            text.setAttribute('font-size', '10px');
            text.textContent = c.hash;
            this.svg.appendChild(text);
        });
    }
}

// Global Terminal Helper
function runQuickCommand(cmd) {
    if (window.gitSim) {
        window.gitSim.execute(cmd);
    }
}

// ============================================================
// 5. HOLOGRAPHIC MULTIVERSE PASS GENERATOR (RSVP)
// ============================================================
function generateMultiversePass(e) {
    if (e) e.preventDefault();

    const nameInput = document.getElementById('passNameInput');
    const deptInput = document.getElementById('passDeptInput');
    const univInput = document.getElementById('passUnivSelect');

    const name = (nameInput && nameInput.value.trim()) || 'Cadet Developer';
    const dept = (deptInput && deptInput.value.trim()) || 'First Year Fresher';
    const univ = (univInput && univInput.value) || 'web';

    const univData = UNIVERSES_DATA[univ] || UNIVERSES_DATA.web;
    const recruitId = 'DEVUP-2026-' + Math.random().toString(16).substring(2, 6).toUpperCase();

    // Update Live Pass Card
    const nameEl = document.getElementById('previewAttendeeName');
    const subEl = document.getElementById('previewAttendeeSub');
    const idEl = document.getElementById('previewRecruitId');
    const pillEl = document.getElementById('previewUnivPill');
    const navIdEl = document.getElementById('navRecruitIdDisplay');

    if (nameEl) nameEl.textContent = name.toUpperCase();
    if (subEl) subEl.textContent = `${dept.toUpperCase()} · BATCH OF 2026-30`;
    if (idEl) idEl.textContent = recruitId;
    if (navIdEl) navIdEl.textContent = recruitId;
    if (pillEl) {
        pillEl.textContent = `${univData.name.toUpperCase()} · ${univData.motto}`;
        pillEl.style.borderColor = univData.color;
        pillEl.style.color = univData.color;
    }

    if (window.mvAudio) window.mvAudio.playSuccessChord();

    // Subtle celebration feedback
    const passCard = document.getElementById('holographicPassCard');
    if (passCard) {
        passCard.style.transform = 'scale(1.04) rotateX(6deg)';
        setTimeout(() => {
            passCard.style.transform = '';
        }, 400);
    }
}

// Download Ticket as PNG Image using Canvas
function downloadPassAsImage() {
    const canvas = document.createElement('canvas');
    canvas.width = 900;
    canvas.height = 540;
    const ctx = canvas.getContext('2d');

    const name = document.getElementById('previewAttendeeName')?.textContent || 'RECRUIT';
    const sub = document.getElementById('previewAttendeeSub')?.textContent || 'FIRST YEAR FRESHER';
    const recruitId = document.getElementById('previewRecruitId')?.textContent || 'DEVUP-2026-0001';
    const univText = document.getElementById('previewUnivPill')?.textContent || 'WEB UNIVERSE';

    // Background gradient
    const bgGrad = ctx.createLinearGradient(0, 0, 900, 540);
    bgGrad.addColorStop(0, '#0F1622');
    bgGrad.addColorStop(1, '#070A0F');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 900, 540);

    // Glowing border
    ctx.strokeStyle = '#FF6A00';
    ctx.lineWidth = 6;
    ctx.strokeRect(20, 20, 860, 500);

    // Header strip
    ctx.fillStyle = 'rgba(255, 106, 0, 0.15)';
    ctx.fillRect(20, 20, 860, 90);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 28px "Chakra Petch", sans-serif';
    ctx.fillText('DEVUP // GIT & GITHUB SESSION', 50, 75);

    ctx.fillStyle = '#FFA800';
    ctx.font = 'bold 20px "JetBrains Mono", monospace';
    ctx.fillText(recruitId, 680, 75);

    // Attendee Name
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 44px "Outfit", sans-serif';
    ctx.fillText(name, 50, 220);

    // Subtitle
    ctx.fillStyle = '#94A3B8';
    ctx.font = '20px "JetBrains Mono", monospace';
    ctx.fillText(sub, 50, 270);

    // Universe Tag
    ctx.fillStyle = '#FF7700';
    ctx.font = 'bold 22px "Chakra Petch", sans-serif';
    ctx.fillText(univText, 50, 330);

    // Date & Venue Footer
    ctx.fillStyle = '#CBD5E1';
    ctx.font = 'bold 18px "JetBrains Mono", monospace';
    ctx.fillText('DATE: 10 SEPTEMBER 2026 | TIME: TBA | OPEN FOR ALL FIRST YEARS', 50, 470);

    // Verified Seal
    ctx.fillStyle = '#10B981';
    ctx.font = 'bold 18px "JetBrains Mono", monospace';
    ctx.fillText('✓ OFFICIAL DEVUP RECRUIT PASS', 560, 470);

    // Download trigger
    const link = document.createElement('a');
    link.download = `DEVUP-PASS-${recruitId}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
}

// ============================================================
// 6. REAL-TIME COUNTDOWN TO SEPTEMBER 10, 2026
// ============================================================
function updateCountdown() {
    const target = new Date('September 10, 2026 10:00:00 GMT+0530').getTime();
    const now = new Date().getTime();
    const diff = target - now;

    const daysEl = document.getElementById('countDays');
    const hoursEl = document.getElementById('countHours');
    const minsEl = document.getElementById('countMins');
    const secsEl = document.getElementById('countSecs');

    if (diff <= 0) {
        if (daysEl) daysEl.textContent = '00';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minsEl) minsEl.textContent = String(minutes).padStart(2, '0');
    if (secsEl) secsEl.textContent = String(seconds).padStart(2, '0');
}

// ============================================================
// 7. POSTER MODAL LIGHTBOX
// ============================================================
function openPosterModal() {
    const modal = document.getElementById('posterModal');
    if (modal) {
        modal.classList.add('active');
        if (window.mvAudio) window.mvAudio.playPortalPulse(600);
    }
}

function closePosterModal() {
    const modal = document.getElementById('posterModal');
    if (modal) modal.classList.remove('active');
}

// ============================================================
// 8. FAQ ACCORDION
// ============================================================
function setupFAQ() {
    const cards = document.querySelectorAll('.faq-card');
    cards.forEach(card => {
        const btn = card.querySelector('.faq-header-btn');
        if (btn) {
            btn.addEventListener('click', () => {
                const isOpen = card.classList.contains('open');
                cards.forEach(c => c.classList.remove('open'));
                if (!isOpen) card.classList.add('open');
            });
        }
    });
}

// Audio Toggle Helper
function toggleGlobalAudio() {
    if (window.mvAudio) {
        const muted = window.mvAudio.toggleMute();
        const btn = document.getElementById('audioToggleBtn');
        if (btn) {
            btn.innerHTML = muted ? '🔇' : '🔊';
            btn.setAttribute('title', muted ? 'Unmute Audio' : 'Mute Audio');
        }
    }
}

// Add to Google Calendar
function addToGoogleCalendar() {
    const title = encodeURIComponent("DEVUP: Git & GitHub Session — Multiple Universes, One Skill");
    const details = encodeURIComponent("Hands-on Git & GitHub masterclass for all first years by DevUp Upskill Collab. One Session. Multiple Universes. One Skill.");
    const location = encodeURIComponent("College Campus / DevUp Nexus");
    const dates = "20260910T043000Z/20260910T083000Z";
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
    window.open(url, '_blank');
}

// ============================================================
// INITIALIZATION
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    setupStargateInteractions();
    setupFAQ();

    // Default select Web Universe
    selectUniverse('web');

    // Init Git Simulator
    window.gitSim = new GitSimulator();

    // Countdown loop
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Escape closes modal
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closePosterModal();
    });

    // Sticky nav border shadow
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.site-header');
        if (header) {
            if (window.scrollY > 40) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
});
