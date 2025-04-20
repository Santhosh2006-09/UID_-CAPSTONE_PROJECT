const ArtGalleryApp = {
    state: {
        currentUser: null,
        likedItems: [],
        cartItems: [],
        artworks: [], 
        categories: [] 
    },


    init() {
        this.loadUserData();
        this.loadArtworkData();
        this.setupEventListeners();
        this.updateUI();
        console.log("Art Gallery App initialized");
    },

 
    loadArtworkData() {
        this.state.artworks = [
            {
                id: 1,
                title: "Sunset Over the Hills",
                artist: "John Doe",
                price: 500,
                category: "paintings",
                image: "Images/Paintings/Sunset over the Hills.jpg",
                description: "A breathtaking landscape capturing the warm hues of sunset over rolling hills.",
                size: "24 × 36 inches",
                medium: "Oil on canvas",
                year: 2023
            },
            {
                id: 2,
                title: "City Lights",
                artist: "Jane Smith",
                price: 750,
                category: "paintings",
                image: "Images/Paintings/city-lights.jpeg",
                description: "Vibrant urban nightscape depicting the energy of a modern metropolis.",
                size: "30 × 40 inches",
                medium: "Acrylic on canvas",
                year: 2022
            },
            {
                id: 3,
                title: "Ocean Waves",
                artist: "Emily Clark",
                price: 600,
                category: "paintings",
                image: "Images/Paintings/ocean-waves.jpg",
                description: "Dynamic seascape capturing the power and movement of ocean waves.",
                size: "20 × 30 inches",
                medium: "Oil on canvas",
                year: 2024
            },
    
            {
                id: 4,
                title: "Color Burst",
                artist: "Sarah Adams",
                price: 900,
                category: "abstract-art",
                image: "Images/Abstracts/colour-burst.jpeg",
                description: "Explosion of vibrant colors creating an energetic abstract composition.",
                size: "36 × 36 inches",
                medium: "Mixed media on canvas",
                year: 2023
            },
            {
                id: 5,
                title: "Geometric Harmony",
                artist: "Michael Lee",
                price: 1200,
                category: "abstract-art",
                image: "Images/Abstracts/geometric-harmony.avif",
                description: "Precise geometric forms in perfect balance and proportion.",
                size: "40 × 40 inches",
                medium: "Acrylic and ink on wood panel",
                year: 2022
            },
            {
                id: 6,
                title: "Abstract Dreams",
                artist: "Olivia Benson",
                price: 850,
                category: "abstract-art",
                image: "Images/Abstracts/abstract-dreams.jpg",
                description: "Surreal composition evoking dreamlike states and subconscious imagery.",
                size: "30 × 40 inches",
                medium: "Oil and acrylic on canvas",
                year: 2023
            },
    
            {
                id: 7,
                title: "The Old Mill",
                artist: "David Miller",
                price: 1500,
                category: "oil-paintings",
                image: "Images/Oil Paintings/old-mill.jpeg",
                description: "Classic landscape featuring a historic mill in golden autumn light.",
                size: "24 × 36 inches",
                medium: "Oil on linen",
                year: 2021
            },
            {
                id: 8,
                title: "Mountain Vista",
                artist: "Anna Roberts",
                price: 2000,
                category: "oil-paintings",
                image: "Images/Oil Paintings/mountain-vista.jpeg",
                description: "Majestic mountain range captured with traditional oil painting techniques.",
                size: "30 × 48 inches",
                medium: "Oil on canvas",
                year: 2023
            },
            {
                id: 9,
                title: "Autumn Glow",
                artist: "Mark Johnson",
                price: 1800,
                category: "oil-paintings",
                image: "Images/Oil Paintings/autumn-glow.jpeg",
                description: "Lush forest scene illuminated by the golden light of autumn.",
                size: "24 × 36 inches",
                medium: "Oil on canvas",
                year: 2022
            },
    
            {
                id: 10,
                title: "Rolling Hills",
                artist: "Laura Green",
                price: 950,
                category: "landscapes",
                image: "Images/Landscapes/rolling-hills.jpg",
                description: "Serene countryside landscape with gentle hills and dramatic skies.",
                size: "24 × 36 inches",
                medium: "Acrylic on canvas",
                year: 2023
            },
            {
                id: 11,
                title: "Desert Mirage",
                artist: "Chris Evans",
                price: 1100,
                category: "landscapes",
                image: "Images/Landscapes/desert-mirage.jpg",
                description: "Heat waves and optical illusions in a vast desert landscape.",
                size: "30 × 40 inches",
                medium: "Oil on canvas",
                year: 2022
            },
            {
                id: 12,
                title: "Forest Path",
                artist: "Emma Watson",
                price: 1300,
                category: "landscapes",
                image: "Images/Landscapes/forest-path.jpg",
                description: "Sun-dappled woodland path inviting the viewer into nature's embrace.",
                size: "24 × 36 inches",
                medium: "Oil on canvas",
                year: 2023
            },
    
            {
                id: 13,
                title: "Grand Canyon",
                artist: "Robert Downey",
                price: 3000,
                category: "large-works",
                image: "Images/Large Works/grand-canyon.jpg",
                description: "Monumental depiction of the Grand Canyon's majestic scale and colors.",
                size: "48 × 72 inches",
                medium: "Oil on canvas",
                year: 2023
            },
            {
                id: 14,
                title: "Urban Skyline",
                artist: "Scarlett Johansson",
                price: 3500,
                category: "large-works",
                image: "Images/Large Works/urban-skyline.jpg",
                description: "Impressive cityscape capturing the architectural grandeur of a metropolis.",
                size: "60 × 40 inches",
                medium: "Acrylic on canvas",
                year: 2024
            },
            {
                id: 15,
                title: "Ocean Depths",
                artist: "Chris Hemsworth",
                price: 3200,
                category: "large-works",
                image: "Images/Large Works/ocean-depths.jpg",
                description: "Underwater seascape revealing the mysterious beauty of the deep ocean.",
                size: "48 × 60 inches",
                medium: "Oil on canvas",
                year: 2023
            },
    
            {
                id: 16,
                title: "Morning Dew",
                artist: "Tom Hiddleston",
                price: 700,
                category: "new-this-week",
                image: "Images/New This Week/morning-dew.jpeg",
                description: "Fresh morning light glistening on dew-covered meadows.",
                size: "20 × 24 inches",
                medium: "Watercolor on paper",
                year: 2024
            },
            {
                id: 17,
                title: "Golden Hour",
                artist: "Elizabeth Olsen",
                price: 800,
                category: "new-this-week",
                image: "Images/New This Week/golden-hour.jpg",
                description: "Magical light of sunset transforming an ordinary scene into something extraordinary.",
                size: "24 × 30 inches",
                medium: "Oil on canvas",
                year: 2024
            },
            {
                id: 18,
                title: "Twilight Glow",
                artist: "Paul Rudd",
                price: 750,
                category: "new-this-week",
                image: "Images/New This Week/twilight-glow.jpg",
                description: "Tranquil moment between day and night with soft, glowing colors.",
                size: "20 × 24 inches",
                medium: "Acrylic on canvas",
                year: 2024
            },

            {
                id: 19,
                title: "Masterpiece Collection",
                artist: "Olivia Benson",
                price: 500,
                category: "curated-collections",
                image: "Images/Curated Collections/masterpiece-collection.jpg",
                description: "Carefully selected works representing the pinnacle of contemporary art.",
                size: "Various sizes",
                medium: "Various media",
                year: 2023
            },
            {
                id: 20,
                title: "Modern Art Collection",
                artist: "Michael Lee",
                price: 1000,
                category: "curated-collections",
                image: "Images/Curated Collections/modern-art-collection.jpeg",
                description: "Innovative works pushing the boundaries of artistic expression.",
                size: "Various sizes",
                medium: "Various media",
                year: 2023
            },
            {
                id: 21,
                title: "Nature's Beauty Collection",
                artist: "Emily Clark",
                price: 800,
                category: "curated-collections",
                image: "Images/Curated Collections/nature's-beauty-collection.jpg",
                description: "Celebration of the natural world through diverse artistic perspectives.",
                size: "Various sizes",
                medium: "Various media",
                year: 2024
            },

            {
                id: 22,
                title: "Starry Night",
                artist: "Vincent Van Gogh",
                price: 2500,
                category: "featured",
                image: "Images/Featured/Starry-night.jpg",
                description: "Iconic swirling night sky over a quiet village, reimagined for contemporary audiences.",
                size: "30 × 36 inches",
                medium: "Oil on canvas",
                year: 2023
            },
            {
                id: 23,
                title: "Mona Lisa",
                artist: "Leonardo da Vinci",
                price: 5000,
                category: "featured",
                image: "Images/Featured/mona-lisa.jpeg",
                description: "Timeless portrait with modern reinterpretation, maintaining the enigmatic smile.",
                size: "24 × 36 inches",
                medium: "Oil on wood panel",
                year: 2022
            },
            {
                id: 24,
                title: "The Scream",
                artist: "Edvard Munch",
                price: 3000,
                category: "featured",
                image: "Images/Featured/the-scream.webp",
                description: "Powerful expression of human anxiety in a contemporary context.",
                size: "36 × 28 inches",
                medium: "Tempera on cardboard",
                year: 2023
            },
    
            {
                id: 25,
                title: "The Thinker",
                artist: "Auguste Rodin",
                price: 2000,
                category: "sculpture",
                image: "Images/Sculptures/the-thinker.jpg",
                description: "Bronze sculpture depicting a man in sober meditation battling with a powerful internal struggle.",
                size: "28 inches tall",
                medium: "Bronze",
                year: 2022
            },
            {
                id: 26,
                title: "David",
                artist: "Michelangelo",
                price: 3500,
                category: "sculpture",
                image: "Images/Sculptures/david.avif",
                description: "Marble masterpiece representing the biblical hero in perfect human form.",
                size: "36 inches tall",
                medium: "Carrara marble",
                year: 2021
            },
            {
                id: 27,
                title: "Venus de Milo",
                artist: "Alexandros of Antioch",
                price: 2800,
                category: "sculpture",
                image: "Images/Sculptures/venus-de-milo.jpeg",
                description: "Ancient Greek statue of Aphrodite, the goddess of love and beauty.",
                size: "32 inches tall",
                medium: "Marble",
                year: 2022
            },
    
            {
                id: 28,
                title: "Toward Lexington Avenue",
                artist: "Chih H Shin",
                price: 2800,
                category: "best-of-2025",
                image: "Images/Best of 2025/Toward Lexington Avenue.jpg",
                description: "Vibrant cityscape capturing the energy of urban life with bold brushstrokes.",
                size: "36 × 48 inches",
                medium: "Oil on canvas",
                year: 2025
            },
            {
                id: 29,
                title: "Unity / Artist Proof 1/3",
                artist: "Yashel Lemay",
                price: 6500,
                category: "best-of-2025",
                image: "Images/Best of 2025/Unity-Artist.jpeg",
                description: "Limited edition abstract work exploring themes of connection and harmony.",
                size: "40 × 60 inches",
                medium: "Mixed media on aluminum",
                year: 2025
            },
            {
                id: 30,
                title: "Subject To Life",
                artist: "Jarca Gallery",
                price: 5000,
                category: "best-of-2025",
                image: "Images/Best of 2025/Subject-to-Life.jpg",
                description: "Provocative contemporary piece examining the human condition.",
                size: "48 × 36 inches",
                medium: "Acrylic and resin on wood",
                year: 2025
            },

            {
                id: 31,
                title: "Reflections of the Past",
                artist: "Leonid Afremov",
                price: 200,
                category: "new-arrivals",
                image: "Images/New Arrivals/New 1.jpeg",
                description: "Experimental work from the artist's sketchbook series.",
                size: "12 × 12 inches",
                medium: "Ink and watercolor on paper",
                year: 2025
            },
            {
                id: 32,
                title: "Rocking Lady",
                artist: "Fizdi Arts",
                price: 450,
                category: "new-arrivals",
                image: "Images/New Arrivals/New 2.jpeg",
                description: "Abstract composition exploring texture and negative space.",
                size: "18 × 24 inches",
                medium: "Acrylic on canvas board",
                year: 2025
            },
            {
                id: 33,
                title: "Tulip Flowers",
                artist: "Mark Kazav",
                price: 300,
                category: "new-arrivals",
                image: "Images/New Arrivals/New 3.jpg",
                description: "Minimalist study in form and color relationships.",
                size: "16 × 20 inches",
                medium: "Gouache on paper",
                year: 2025
            },

            {
                id: 34,
                title: "Spirits Of The Garments",
                artist: "Florencia Querberof",
                price: 150,
                category: "joy-of-art",
                image: "Images/Joy of Art/Joy 1.jpg",
                description: "Whimsical mixed media piece incorporating textile elements.",
                size: "14 × 18 inches",
                medium: "Fabric and acrylic on canvas",
                year: 2024
            },
            {
                id: 35,
                title: "Tales Of Limitless Space Iv",
                artist: "Danielle Caron",
                price: 125,
                category: "joy-of-art",
                image: "Images/Joy of Art/Joy 2.jpeg",
                description: "Playful abstract work with intricate line details.",
                size: "12 × 16 inches",
                medium: "Ink and marker on paper",
                year: 2024
            },

            {
                id: 36,
                title: "Furniture Jockey 1 (2008...)",
                artist: "Tim Macpherson",
                price: 120,
                category: "joy-of-art",
                image: "Images/Joy of Art/Joy 3.jpeg",
                description: "Humorous figurative work with surreal elements.",
                size: "11 × 14 inches",
                medium: "Digital print on archival paper",
                year: 2024
            }
        ];

        // Extract unique categories
        this.state.categories = [...new Set(this.state.artworks.map(art => art.category))];
    },


    loadUserData() {
        const userData = localStorage.getItem('currentUser');
        if (userData) {
            this.state.currentUser = JSON.parse(userData);
            this.state.likedItems = this.state.currentUser?.likedItems || [];
            this.state.cartItems = this.state.currentUser?.cartItems || [];
        }
    },

    saveUserData() {
        if (this.state.currentUser) {
            this.state.currentUser.likedItems = this.state.likedItems;
            this.state.currentUser.cartItems = this.state.cartItems;
            localStorage.setItem('currentUser', JSON.stringify(this.state.currentUser));
        }
    },

    setupEventListeners() {
        this.setupModalListeners();

        this.setupAccountListeners();
        
        this.setupArtworkListeners();
        
        this.setupPopupListeners();

        this.setupCheckoutListeners();

        this.setupMobileMenuListeners();
        
        console.log("All event listeners setup complete");
    },

    setupMobileMenuListeners() {

        const hamburgerBtn = document.querySelector('.hamburger-btn');
        const navMenu = document.querySelector('nav');

        if (hamburgerBtn && navMenu) {
            hamburgerBtn.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                hamburgerBtn.classList.toggle('active');
            });

            document.addEventListener('click', (e) => {
                if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                    navMenu.classList.remove('active');
                    hamburgerBtn.classList.remove('active');
                }
            });

            window.addEventListener('resize', () => {
                if (window.innerWidth > 768) {
                    navMenu.classList.remove('active');
                    hamburgerBtn.classList.remove('active');
                }
            });
        }
    },


    setupModalListeners() {
        document.querySelector('.signup-btn')?.addEventListener('click', () => this.openSignUpModal());
        document.getElementById('loginLink')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.closeAllModals();
            this.openSignUpModal();
        });

        document.getElementById('likedIcon')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.showLikedItems();
        });

        document.getElementById('cartIcon')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.showCart();
        });


        document.getElementById('likedClose')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.closePopup('likedItemsPopup');
        });

        document.getElementById('cartClose')?.addEventListener('click', (e) =>{
            e.preventDefault();
            this.closePopup('cartItemsPopup');
        });

        document.querySelectorAll('.close-modal').forEach(btn => {
            btn.addEventListener('click', () => this.closeAllModals());
        });

        document.getElementById('resetPasswordForm')?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handlePasswordReset(e);
        });

        document.querySelectorAll('#resetPasswordForm input').forEach(input => {
            input.addEventListener('input', () => {
                if (input.checkValidity()) {
                    document.getElementById(`${input.id}Error`).classList.remove('active');
                }
            });
        });

        document.getElementById('signupForm')?.addEventListener('submit', (e) => this.handleSignup(e));

        document.querySelectorAll('.modal-overlay').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) this.closeAllModals();
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeAllModals();
        });
        
    },

    setupAccountListeners() {
        document.getElementById('editProfileBtn')?.addEventListener('click', () => this.editProfile());
        document.getElementById('changePasswordBtn')?.addEventListener('click', () => this.changePassword());
        document.getElementById('logoutBtn')?.addEventListener('click', () => this.logoutUser());
    },

    setupArtworkListeners() {
    document.addEventListener('click', (e) => {
        try {
            const target = e.target;
            const artworkCard = target.closest('.artwork');
            
            if (!artworkCard) return;

            if (target.closest('.like-btn')) {
                e.preventDefault();
                e.stopPropagation();
                const likeBtn = target.closest('.like-btn');
                this.handleLikeClick(artworkCard, likeBtn);
                return;
            }
            
            if (target.closest('.cart-btn')) {
                e.preventDefault();
                e.stopPropagation();
                const title = this.getArtworkTitle(artworkCard);
                const artwork = this.state.artworks.find(art => art.title.trim() === title.trim());
                
                if (artwork) {
                    this.addToCart(artwork);
                    
                    const cartBtn = artworkCard.querySelector('.cart-btn');
                    if (cartBtn) {
                        cartBtn.style.backgroundColor = '#27ae60';
                        setTimeout(() => {
                            cartBtn.style.backgroundColor = '';
                        }, 300);
                    }
                }
                return;
            }
            
            if (target.closest('.liked-items-btn')) {
                e.preventDefault();
                e.stopPropagation();
                this.showLikedItems();
                return;
            }

            if (target.closest('.cart-items-btn')) {
                e.preventDefault();
                e.stopPropagation();
                this.showCart();
                return;
            }

            if (!target.closest('.artwork-actions')) {
                e.preventDefault();
                const title = this.getArtworkTitle(artworkCard);
                const artwork = this.state.artworks.find(art => art.title.trim() === title.trim());
                if (artwork) {
                    this.showArtworkDetails(artwork.id);
                }
            }
        } catch (error) {
            console.error('Error handling artwork interaction:', error);
            this.showToast('An error occurred. Please try again.');
        }
    });
},

    addToCart(artwork) {
        const existingItem = this.state.cartItems.find(item => item.title.trim() === artwork.title.trim());
        
        if (existingItem) {
            existingItem.quantity += 1;
            this.showToast('Quantity increased in cart');
        } else {
            this.state.cartItems.push({ 
                id: artwork.id,
                title: artwork.title, 
                price: artwork.price,
                image: artwork.image,
                artist: artwork.artist,
                dateAdded: new Date().toISOString(),
                quantity: 1
            });
            this.showToast('Added to cart');
        }
        
        this.saveUserData();
        this.updateCartCount();
    },

        setupPopupListeners() {
            document.querySelectorAll('.close-popup').forEach(btn => {
                btn.addEventListener('click', () => {
                    const popup = btn.closest('.popup-overlay');
                    if (popup) {
                        popup.style.display = 'none';
                        document.body.style.overflow = 'auto';
                    }
                });
            });

            document.querySelectorAll('.popup-overlay').forEach(popup => {
                popup.addEventListener('click', (e) => {
                    if (e.target === popup) {
                        popup.style.display = 'none';
                        document.body.style.overflow = 'auto';
                    }
                });
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    document.querySelectorAll('.popup-overlay').forEach(popup => {
                        popup.style.display = 'none';
                        document.body.style.overflow = 'auto';
                    });
                }
            });
        },

    setupCheckoutListeners() {
        document.querySelector('.checkout-btn')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.openCheckoutPopup();
        });

        document.getElementById('checkoutForm')?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.processPayment();
        });

        document.querySelector('#confirmationPopup .confirmation-btn')?.addEventListener('click', () => {
            document.getElementById('confirmationPopup').style.display = 'none';
            document.body.style.overflow = 'auto';
        });

    document.querySelectorAll('input[name="shipping"]').forEach(option => {
        option.addEventListener('change', () => {
            this.updateOrderSummary();
        });
    });

    document.querySelectorAll('.payment-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            this.switchPaymentMethod(tab.dataset.method);
        });
    });

    document.getElementById('sameAsShipping')?.addEventListener('change', function() {
        document.getElementById('billingAddressFields').classList.toggle('hidden', this.checked);
    });

    document.getElementById('checkoutForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        this.processCheckout();
    });
    },

    handleLikeClick(artworkCard, likeBtn) {
        const title = this.getArtworkTitle(artworkCard);
        const artwork = this.state.artworks.find(art => art.title === title);
        
        if (artwork) {
            this.toggleLike(artwork);

            const icon = likeBtn.querySelector('ion-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    icon.style.transform = 'scale(1)';
                }, 200);
            }
        }
    },

    handleCartClick(artworkCard) {
        const title = this.getArtworkTitle(artworkCard);
        const artwork = this.state.artworks.find(art => art.title === title);
        
        if (artwork) {
            this.addToCart(artwork);
            const cartBtn = artworkCard.querySelector('.cart-btn');
            if (cartBtn) {
                cartBtn.style.backgroundColor = '#27ae60';
                setTimeout(() => {
                    cartBtn.style.backgroundColor = '';
                }, 300);
            }
        }
    },

    handleArtworkClick(artworkCard) {
        const title = this.getArtworkTitle(artworkCard);
        const artwork = this.state.artworks.find(art => art.title === title);
        
        if (artwork) {
            this.showArtworkDetails(artwork.id);
        }
    },

    updateUI() {
        this.updateLikeCount();
        this.updateCartCount();
        this.updateProfileIcon();
        this.initializeLikeButtons();
        this.renderCategories();
    },

    renderCategories() {
        const container = document.querySelector('.category-container');
        if (!container) return;
        
        container.innerHTML = this.state.categories.map(category => `
            <div class="category-item ${category === 'paintings' ? 'active-category' : ''}" onclick="ArtGalleryApp.showCategory('${category}')">
                ${this.formatCategoryName(category)}
            </div>
        `).join('');
    },

    formatCategoryName(category) {
        return category.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    },

    openSignUpModal() {
        if (this.state.currentUser) {
            this.showProfile();
        } else {
            document.getElementById('signupModal').style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    },

    showProfile() {
        if (!this.state.currentUser) return;

        const user = this.state.currentUser;
        const memberSince = user.joinDate ? new Date(user.joinDate).toLocaleDateString('en-US', {
            year: 'numeric', 
            month: 'long'
        }) : 'Recently';

        document.getElementById('profileInfo').innerHTML = `
            <div class="detail-group">
                <h3>Account Information</h3>
                <p><strong>Name:</strong> ${user.firstName} ${user.lastName}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Member Since:</strong> ${memberSince}</p>
            </div>
            <div class="detail-group">
                <h3>Contact Details</h3>
                <p><strong>Phone:</strong> ${user.phone || 'Not provided'}</p>
                <p><strong>Address:</strong> ${user.street ? `${user.street}, ${user.city}, ${user.state} ${user.zip}` : 'Not provided'}</p>
            </div>
            <div class="detail-group">
                <h3>Preferences</h3>
                <p><strong>Favorite Art Types:</strong> ${user.artType?.join(', ') || 'None selected'}</p>
                <p><strong>Budget:</strong> ${user.budget ? user.budget.replace('-', ' - $') : 'Not specified'}</p>
            </div>
            <div class="detail-group">
                <h3>Activity</h3>
                <p><strong>Liked Items:</strong> ${this.state.likedItems.length}</p>
                <p><strong>Cart Items:</strong> ${this.state.cartItems.length}</p>
            </div>
        `;

        const avatar = document.querySelector('.profile-avatar');
        if (avatar && user.firstName && user.lastName) {
            avatar.textContent = `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`;
        }

        document.getElementById('profileModal').style.display = 'flex';
        document.body.style.overflow = 'hidden';
    },

    closeAllModals() {
        document.querySelectorAll('.modal-overlay').forEach(modal => {
            modal.style.display = 'none';
        });
        document.body.style.overflow = 'auto';
    },


handlePasswordReset(e) {
    e.preventDefault();
    this.clearErrors();

    const currentPassword = document.getElementById('currentPassword');
    const newPassword = document.getElementById('newPassword');
    const confirmPassword = document.getElementById('confirmPassword');
    let isValid = true;

    if (!currentPassword.value.trim()) {
        this.showError(currentPassword, 'Current password is required');
        isValid = false;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(newPassword.value)) {
        this.showError(newPassword, 'Password must contain uppercase, lowercase, number, and special character');
        isValid = false;
    }

    if (newPassword.value !== confirmPassword.value) {
        this.showError(confirmPassword, 'Passwords do not match');
        isValid = false;
    }

    if (isValid) {
        this.state.currentUser.password = newPassword.value;
        this.saveUserData();
        this.showToast('Password updated successfully!');
        this.closeAllModals();
    }
},

    handleSignup(e) {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);
        
        this.state.currentUser = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            password: formData.get('password'),
            phone: formData.get('phone'),
            street: formData.get('street'),
            city: formData.get('city'),
            state: formData.get('state'),
            zip: formData.get('zip'),
            artType: Array.from(form.querySelectorAll('input[name="artType"]:checked')).map(el => el.value),
            budget: formData.get('budget'),
            newsletter: formData.get('newsletter') === 'on',
            joinDate: new Date().toISOString(),
            likedItems: this.state.likedItems,
            cartItems: this.state.cartItems
        };

        this.saveUserData();
        this.closeAllModals();
        this.showProfile();
        this.updateUI();
        this.showToast(`Welcome, ${this.state.currentUser.firstName}!`);
    },

    editProfile() {
        this.closeAllModals();
        document.getElementById('signupModal').style.display = 'flex';
        
        const user = this.state.currentUser;
        if (!user) return;

        const form = document.getElementById('signupForm');
        form.querySelector('#firstName').value = user.firstName || '';
        form.querySelector('#lastName').value = user.lastName || '';
        form.querySelector('#email').value = user.email || '';
        form.querySelector('#phone').value = user.phone || '';
        form.querySelector('#street').value = user.street || '';
        form.querySelector('#city').value = user.city || '';
        form.querySelector('#state').value = user.state || '';
        form.querySelector('#zip').value = user.zip || '';
        
        form.querySelectorAll('input[name="artType"]').forEach(checkbox => {
            checkbox.checked = user.artType?.includes(checkbox.value) || false;
        });
        
        if (user.budget) {
            form.querySelector('#budget').value = user.budget;
        }
        
        form.querySelector('#newsletter').checked = user.newsletter || false;
        form.querySelector('.submit-btn').textContent = 'Update Profile';
    },

    changePassword() {
        this.closeAllModals();
        document.getElementById('resetPasswordModal').style.display = 'flex';
        document.body.style.overflow = 'hidden';
    },

    logoutUser() {
        this.state.currentUser = null;
        this.state.likedItems = [];
        this.state.cartItems = [];
        localStorage.removeItem('currentUser');
        this.closeAllModals();
        this.updateUI();
        this.showToast('You have been logged out');
    },

    toggleLike(artwork) {
        const itemIndex = this.state.likedItems.findIndex(item => item.title === artwork.title);
        
        if (itemIndex === -1) {
            this.state.likedItems.push({ 
                title: artwork.title, 
                price: artwork.price,
                image: artwork.image,
                artist: artwork.artist
            });
            this.showToast('Added to favorites');
        } else {
            this.state.likedItems.splice(itemIndex, 1);
            this.showToast('Removed from favorites');
        }
        
        this.saveUserData();
        this.updateLikeCount();
        this.initializeLikeButtons();
    },

    addToCart(artwork) {
        this.state.cartItems.push({ 
            title: artwork.title, 
            price: artwork.price,
            image: artwork.image,
            artist: artwork.artist,
            dateAdded: new Date().toISOString(),
            quantity: 1
        });
        this.saveUserData();
        this.updateCartCount();
        this.showToast('Added to cart');
    },

    getArtworkTitle(artworkElement) {
        const titleElement = artworkElement.querySelector('strong')?.nextSibling || 
                        artworkElement.querySelector('.artwork-info p:first-child');
        return titleElement?.textContent.trim() || 'Unknown Artwork';
    },

    getArtworkPrice(artworkElement) {
        const priceText = artworkElement.querySelector('p:nth-of-type(3)')?.textContent || 
                        artworkElement.querySelector('.artwork-info p:last-child')?.textContent;
        return parseFloat(priceText?.replace(/[^0-9.]/g, '') || 0);
    },

    updateLikeCount() {
        document.querySelectorAll('.like-count').forEach(el => {
            el.textContent = this.state.likedItems.length;
        });
    },

    updateCartCount() {
        document.querySelectorAll('.cart-count').forEach(el => {
            el.textContent = this.state.cartItems.length;
        });
    },

    updateProfileIcon() {
        const signupBtn = document.querySelector('.signup-btn');
        if (!signupBtn) return;

        if (this.state.currentUser) {
            const initial = this.state.currentUser.firstName?.charAt(0).toUpperCase() || 'U';
            signupBtn.innerHTML = `<span class="profile-initial">${initial}</span>`;
            signupBtn.classList.add('profile-initial-btn');
        } else {
            signupBtn.innerHTML = `<ion-icon name="person-add"></ion-icon>`;
            signupBtn.classList.remove('profile-initial-btn');
        }
    },

    initializeLikeButtons() {
        document.querySelectorAll('.like-btn').forEach(button => {
            const title = this.getArtworkTitle(button.closest('.artwork'));
            if (this.state.likedItems.some(item => item.title === title)) {
                button.classList.add('liked');
                const icon = button.querySelector('ion-icon');
                if (icon) {
                    icon.setAttribute('name', 'heart');
                    icon.style.color = '#e74c3c';
                }
            } else {
                button.classList.remove('liked');
                const icon = button.querySelector('ion-icon');
                if (icon) {
                    icon.setAttribute('name', 'heart-outline');
                    icon.style.color = '';
                }
            }
        });
    },

    showError(input, message) {
        const errorElement = document.getElementById(`${input.id}Error`);
        errorElement.textContent = message;
        errorElement.classList.add('active');
        input.classList.add('error');
    },
    
    clearErrors() {
        document.querySelectorAll('.error-message').forEach(error => {
            error.textContent = '';
            error.classList.remove('active');
        });
        document.querySelectorAll('input').forEach(input => {
            input.classList.remove('error');
        });
    },

    showToast(message) {
        let toast = document.getElementById('artGalleryToast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'artGalleryToast';
            toast.style.position = 'fixed';
            toast.style.bottom = '20px';
            toast.style.left = '50%';
            toast.style.transform = 'translateX(-50%)';
            toast.style.backgroundColor = '#333';
            toast.style.color = 'white';
            toast.style.padding = '12px 24px';
            toast.style.borderRadius = '4px';
            toast.style.zIndex = '10000';
            toast.style.transition = 'opacity 0.3s';
            toast.style.opacity = '0';
            document.body.appendChild(toast);
        }

        toast.textContent = message;
        toast.style.opacity = '1';

        setTimeout(() => {
            toast.style.opacity = '0';
        }, 3000);
    },

    showLikedItems() {
        if (this.state.likedItems.length === 0) {
            this.showToast("You haven't liked any items yet!");
            return;
        }
        
        const popup = document.getElementById('likedItemsPopup');
        const listContainer = document.getElementById('likedItemsList');
        const totalElement = document.getElementById('likedItemsTotal');
        
        listContainer.innerHTML = '';
        
        let totalValue = 0;
        this.state.likedItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'item-card';
            itemElement.innerHTML = `
                <img src="${item.image || 'placeholder.jpg'}" alt="${item.title}">
                <div class="item-info">
                    <h3>${item.title}</h3>
                    <p>${item.artist || 'Unknown artist'}</p>
                </div>
                <div class="item-price">$${item.price.toFixed(2)}</div>
                <button class="remove-btn" data-title="${item.title}">
                    <ion-icon name="trash-outline"></ion-icon>
                </button>
            `;
            listContainer.appendChild(itemElement);
            
            totalValue += item.price;
        });

        totalElement.textContent = `$${totalValue.toFixed(2)}`;

        popup.style.display = 'flex';
        document.body.style.overflow = 'hidden';

        document.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const title = e.currentTarget.getAttribute('data-title');
                this.removeLikedItem(title);
            });
        });
    },

    showCart() {
        console.log("calling");
        const popup = document.getElementById('cartItemsPopup');
        const listContainer = document.getElementById('cartItemsList');
        const totalElement = document.getElementById('cartItemsTotal');
        
        listContainer.innerHTML = '';
        
        if (this.state.cartItems.length === 0) {
            listContainer.innerHTML = `
                <div class="empty-cart">
                    <ion-icon name="cart-outline" style="font-size: 48px;"></ion-icon>
                    <p>Your cart is empty</p>
                    <a href="#explore-categories" class="cta-btn" 
                    onclick="document.getElementById('cartItemsPopup').style.display='none'">
                        Browse Artworks
                    </a>
                </div>
            `;
            totalElement.textContent = '$0.00';
        } else {
            let totalValue = 0;
            this.state.cartItems.forEach((item, index) => {
                const itemElement = document.createElement('div');
                itemElement.className = 'item-card';
                itemElement.innerHTML = `
                    <img src="${item.image || 'placeholder.jpg'}" alt="${item.title}">
                    <div class="item-info">
                        <h3>${item.title}</h3>
                        <p>${item.artist || 'Unknown artist'}</p>
                        <div class="quantity-controls">
                            <button class="quantity-btn minus" data-index="${index}">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="quantity-btn plus" data-index="${index}">+</button>
                        </div>
                    </div>
                    <div class="item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                    <button class="remove-btn" data-index="${index}">
                        <ion-icon name="trash-outline"></ion-icon>
                    </button>
                `;
                listContainer.appendChild(itemElement);
                
                totalValue += item.price * item.quantity;
            });

            totalElement.textContent = `$${totalValue.toFixed(2)}`;

            this.setupCartItemEventListeners();
        }

        popup.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    },
    
    setupCartItemEventListeners() {

        document.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.getAttribute('data-index'));
                this.removeCartItem(index);
            });
        });

        document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.getAttribute('data-index'));
                this.updateCartItemQuantity(index, 1);
            });
        });

        document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.getAttribute('data-index'));
                this.updateCartItemQuantity(index, -1);
            });
        });
    },
    
    removeCartItem(index) {
        if (index >= 0 && index < this.state.cartItems.length) {
            this.state.cartItems.splice(index, 1);
            this.saveUserData();
            this.updateCartCount();
            this.showCart();
            
            if (this.state.cartItems.length === 0) {
                this.showToast("Your cart is now empty");
            }
        }
    },
    
    updateCartItemQuantity(index, change) {
        if (index >= 0 && index < this.state.cartItems.length) {
            const newQuantity = this.state.cartItems[index].quantity + change;
            
            if (newQuantity <= 0) {
                this.removeCartItem(index);
            } else {
                this.state.cartItems[index].quantity = newQuantity;
                this.saveUserData();
                this.updateCartCount();
                this.showCart(); 
            }
        }
    },
    
    removeLikedItem(title) {
        this.state.likedItems = this.state.likedItems.filter(item => item.title !== title);
        this.saveUserData();
        this.updateLikeCount();
        this.showLikedItems();
        this.initializeLikeButtons(); 
    },

    removeCartItem(index) {
        index = parseInt(index);
        if (index >= 0 && index < this.state.cartItems.length) {
            this.state.cartItems.splice(index, 1);
            this.saveUserData();
            this.updateCartCount();
            this.showCart(); 
            
            if (this.state.cartItems.length === 0) {
                this.showToast("Your cart is now empty");
            }
        }
    },

    updateCartItemQuantity(index, change) {
        index = parseInt(index);
        if (index >= 0 && index < this.state.cartItems.length) {
            const newQuantity = this.state.cartItems[index].quantity + change;
            
            if (newQuantity <= 0) {
                this.removeCartItem(index);
            } else {
                this.state.cartItems[index].quantity = newQuantity;
                this.saveUserData();
                this.showCart();
                this.updateCartCount();
            }
        }
    },

    openCheckoutPopup() {
        const popup = document.getElementById('checkoutPopup');
        const itemsList = document.getElementById('checkoutItemsList');
        const totalElement = document.getElementById('checkoutTotal');

        itemsList.innerHTML = '';

        let totalValue = 0;
        this.state.cartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'checkout-item';
            itemElement.innerHTML = `
                <p>${item.title} - $${item.price.toFixed(2)}</p>
            `;
            itemsList.appendChild(itemElement);
            
            totalValue += item.price;
        });

        totalElement.textContent = `$${totalValue.toFixed(2)}`;

        popup.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    },

    updateOrderSummary() {
        const itemsList = document.getElementById('checkoutItemsList');
        itemsList.innerHTML = '';
        
        let subtotal = 0;
        
        this.state.cartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'checkout-item';
            itemElement.innerHTML = `
                <span>${item.title} × ${item.quantity}</span>
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
            `;
            itemsList.appendChild(itemElement);
            subtotal += item.price * item.quantity;
        });

        const shipping = parseFloat(document.querySelector('input[name="shipping"]:checked')?.dataset.price || 5.99);
        const tax = subtotal * 0.1; 
        
        document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
        document.getElementById('shippingFee').textContent = `$${shipping.toFixed(2)}`;
        document.getElementById('taxAmount').textContent = `$${tax.toFixed(2)}`;
        
        const total = subtotal + shipping + tax;
        document.getElementById('checkoutTotal').textContent = `$${total.toFixed(2)}`;
        document.getElementById('finalTotal').textContent = total.toFixed(2);
    },
    
    switchPaymentMethod(method) {

    document.querySelectorAll('.payment-tab').forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
    });
    
    const activeTab = document.querySelector(`.payment-tab[data-method="${method}"]`);
    activeTab.classList.add('active');
    activeTab.setAttribute('aria-selected', 'true');

    document.querySelectorAll('.payment-content').forEach(content => {
        content.classList.add('hidden');
        content.setAttribute('aria-hidden', 'true');
    });

    const activeContent = document.getElementById(`${method}Form`);
    activeContent.classList.remove('hidden');
    activeContent.setAttribute('aria-hidden', 'false');

    activeContent.offsetHeight;
    },
    
    validateCheckoutForm() {
        let isValid = true;
        const checkoutForm = document.getElementById('checkoutForm');

        checkoutForm.querySelectorAll('[required]').forEach(field => {
            if (!field.value.trim()) {
                field.style.borderColor = '#ff4444';
                isValid = false;
            } else {
                field.style.borderColor = '#ddd';
            }
        });
        
        if (document.querySelector('.payment-tab.active').dataset.method === 'credit') {
            const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
            if (!this.validateCardNumber(cardNumber)) {
                alert('Please enter a valid credit card number');
                isValid = false;
            }
            
            const cvv = document.getElementById('cvv').value;
            if (cvv.length < 3 || cvv.length > 4) {
                alert('Please enter a valid CVV');
                isValid = false;
            }
        }

        if (!document.getElementById('acceptTerms').checked) {
            alert('You must accept the terms and conditions');
            isValid = false;
        }
        
        return isValid;
    },
    
    validateCardNumber(cardNumber) {
        let sum = 0;
        let shouldDouble = false;
        
        for (let i = cardNumber.length - 1; i >= 0; i--) {
            let digit = parseInt(cardNumber.charAt(i));
            
            if (shouldDouble) {
                if ((digit *= 2) > 9) digit -= 9;
            }
            
            sum += digit;
            shouldDouble = !shouldDouble;
        }
        
        return (sum % 10) === 0;
    },
    
    processCheckout() {
        if (!this.validateCheckoutForm()) {
            return;
        }
    
        const activePaymentMethod = document.querySelector('.payment-tab.active').dataset.method;
        const submitBtn = document.querySelector('#checkoutForm .submit-btn');

        submitBtn.disabled = true;
        submitBtn.innerHTML = `<ion-icon name="lock-closed"></ion-icon> Processing...`;

        setTimeout(() => {
            const email = this.state.currentUser?.email || document.getElementById('cardName').value + '@example.com';
            document.getElementById('confirmationEmail').textContent = email;
            
            document.getElementById('orderId').textContent = `RA-${Math.floor(Math.random() * 1000000)}`;

            this.closeCheckout();
            document.getElementById('confirmationPopup').style.display = 'flex';
            
            this.state.cartItems = [];
            this.updateCartCount();
            this.saveUserData();

            document.getElementById('checkoutForm').reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = `<ion-icon name="lock-closed"></ion-icon> Pay Now`;
        }, 2000);
    },
    
    processPayment() {
        const email = this.state.currentUser?.email || document.getElementById('cardName').value + '@example.com';
        document.getElementById('confirmationEmail').textContent = email;
        
        document.getElementById('orderId').textContent = `RA-${Math.floor(Math.random() * 1000000)}`;

        document.getElementById('checkoutPopup').style.display = 'none';
        document.getElementById('confirmationPopup').style.display = 'flex';

        this.state.cartItems = [];
        this.updateCartCount();
        this.saveUserData();
    },

    showCategory(categoryId) {
        document.querySelectorAll('.category-details').forEach(section => {
            section.style.display = 'none';
        });

        const selectedCategory = document.getElementById(categoryId);
        if (selectedCategory) {
            selectedCategory.style.display = 'block';

            selectedCategory.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }

        this.highlightSelectedCategory(categoryId);
    },

    highlightSelectedCategory(categoryId) {
        document.querySelectorAll('.category-item').forEach(item => {
            item.classList.remove('active-category');
        });
        const clickedCard = document.querySelector(`.category-item[onclick="ArtGalleryApp.showCategory('${categoryId}')"]`);
        if (clickedCard) {
            clickedCard.classList.add('active-category');
        }
    },

    openPopup(popupId) {
        document.getElementById(popupId).style.display = 'flex';
        document.body.style.overflow = 'hidden';
    },

    closePopup(popupId) {
        document.getElementById(popupId).style.display = 'none';
        document.body.style.overflow = 'auto';
    },

    showArtworkDetails(artworkId) {
        const artwork = this.state.artworks.find(art => art.id === artworkId);
        if (!artwork) return;
    
        document.getElementById('popupArtworkImage').src = artwork.image;
        document.getElementById('popupArtworkImage').alt = artwork.title;
        document.getElementById('popupArtworkTitle').textContent = artwork.title;
        document.getElementById('popupArtworkArtist').textContent = artwork.artist;
        document.getElementById('popupArtworkPrice').textContent = `$${artwork.price.toFixed(2)}`;
        document.getElementById('popupArtDescription').textContent = artwork.description || 'No description available';
        document.getElementById('popupArtSize').textContent = artwork.size || 'Not specified';
        document.getElementById('popupArtMedium').textContent = artwork.medium || 'Not specified';
        document.getElementById('popupArtCategory').textContent = this.formatCategoryName(artwork.category);
    

        const likeBtn = document.querySelector('#artworkPopup .like-btn');
        const isLiked = this.state.likedItems.some(item => item.title === artwork.title);
        likeBtn.classList.toggle('liked', isLiked);
        likeBtn.querySelector('ion-icon').setAttribute('name', isLiked ? 'heart' : 'heart-outline');
        likeBtn.onclick = () => {
            this.toggleLike(artwork);
            const nowLiked = !isLiked;
            likeBtn.classList.toggle('liked', nowLiked);
            likeBtn.querySelector('ion-icon').setAttribute('name', nowLiked ? 'heart' : 'heart-outline');
        };

        const cartBtn = document.querySelector('#artworkPopup .cart-btn');
        cartBtn.onclick = () => {
            this.addToCart(artwork);
            this.showToast('Added to cart');
        };

        document.getElementById('artworkPopup').style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.category-details').forEach(section => {
        section.style.display = 'none';
    });

    document.getElementById('paintings').style.display = 'block';
    ArtGalleryApp.init();
});